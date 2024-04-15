<template>
    <div>
      <p>Twój adres IP to: {{ ip }}</p>
      <p>Twój kraj to: {{ country }}</p>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        ip: null,
        country: null,
      };
    },
    async mounted() {
      const res = await fetch('https://api.ipify.org?format=json');
      const data = await res.json();
      this.ip = data.ip;
  
      // Przekazanie adresu IP do Google Maps Geolocation API
      const geoRes = await fetch(`https://www.googleapis.com/geolocation/v1/geolocate?key=AIzaSyC3q33-j16LYx1Wk6f39f5o6KgG6n2R0Rk`, {
        method: 'POST',
        body: JSON.stringify({
          considerIp: true,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const geoData = await geoRes.json();
  
      // Użycie Google Maps Geocoding API do uzyskania nazwy kraju
      const geocodeRes = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${geoData.location.lat},${geoData.location.lng}&key=AIzaSyC3q33-j16LYx1Wk6f39f5o6KgG6n2R0Rk`);
      const geocodeData = await geocodeRes.json();
      console.log(geocodeData); // Dodajemy logowanie do konsoli tutaj
      if (geocodeData.results && geocodeData.results.length > 0) {
        const countryComponent = geocodeData.results[0].address_components.find(component => component.types.includes('country'));
        if (countryComponent) {
          this.country = countryComponent.long_name;
        }
      }
    },
  };
  </script>