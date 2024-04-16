<template>
  <div class="w-full flex items-center">
    <div class="w-screen h-screen flex items-center justify-center">
      <div>

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
      if (current?.includes('_ga') !== previous?.includes('_ga')) {
        if (!current?.includes('_ga')) {
          const _gaCookie = useCookie('_ga');
          _gaCookie.value = null;
          const _gaContainerCookie = useCookie('_ga_5FK73WVJ8L');
          _gaContainerCookie.value = null;
        }
        // cookie with id `google-analytics` got added
        window.location.reload(); // placeholder for your custom change handler
      }
    },
    { deep: true },
);
</script>
