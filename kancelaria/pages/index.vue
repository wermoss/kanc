<template>
  <div class="w-full flex items-center">
    <div class="w-screen h-screen flex items-center justify-center">
      <div>
        <h1>Version: 1.0.3</h1>
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

// example: react to a cookie being accepted
watch(
    () => cookiesEnabledIds.value,
    (current, previous) => {
      if (current?.includes('gtm') !== previous?.includes('gtm')) {
        const eraseCookie = (name) => {
          document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.lexxo.vercel.app;';
        };
        console.log(current);
        eraseCookie('_ga');
        eraseCookie('_ga_5FK73WVJ8L');
        // cookie with id `google-analytics` got added
        window.location.reload(); // placeholder for your custom change handler
      }
    },
    { deep: true },
);
</script>
