<template>
  <div class="w-full flex items-center">
    <div class="w-screen h-screen flex items-center justify-center">
      <div>
        <h1>Version: 1.0.6</h1>
        <div>
          <CookieControl />
        </div>
        <!--      <div><Geolocation /></div>-->
        <!--      <div><Browser /></div>-->

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const {
  cookiesEnabled,
  cookiesEnabledIds,
  isConsentGiven,
  isModalActive,
  moduleOptions,
} = useCookieControl();

function allConsentGranted() {
  const { gtag } = useGtag();
  gtag('consent', 'update', {
    ad_user_data: 'granted',
    ad_personalization: 'granted',
    ad_storage: 'granted',
    analytics_storage: 'granted',
  });
}

// example: react to a cookie being accepted
watch(
    () => cookiesEnabledIds.value,
    (current, previous) => {
      console.log(current.gtm);

      if (current.gtm) {
        const { gtag, initialize } = useGtag();
        console.log(gtag);
        initialize();
        console.log('Google Tag Manager cookie accepted');
        allConsentGranted();
      } else {
        console.log('Google Tag Manager cookie not accepted');
      }

      const eraseCookie = (name) => {
        document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.lexxo.vercel.app;Max-Age=0;';
      };
      eraseCookie('_ga');
      eraseCookie('_ga_5FK73WVJ8L');
      // cookie with id `google-analytics` got added
      window.location.reload(); // placeholder for your custom change handler
    },
    { deep: true },
);
</script>
