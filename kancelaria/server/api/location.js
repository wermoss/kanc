// client-side code
fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    // data.ip contains the client's IP address
    fetch(`/api/location?ip=${data.ip}`)
      .then(response => response.json())
      .then(data => {
        // data contains the geolocation information
      });
  });

// server/api/location.js
import fetch from 'node-fetch';

export default defineEventHandler({
  async handler(req, res) {
    const ip = req.query.ip;
    const response = await fetch(`http://ip-api.com/json/${ip}`);
    const data = await response.json();
    if (data && data.countryCode) {
      res.send({ country: data.countryCode });
    } else {
      res.status(500).send({ error: 'Unable to geolocate IP' });
    }
  }
});