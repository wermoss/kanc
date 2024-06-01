<template>
  <div class="w-full flex items-center">
    <div class="w-screen h-screen flex items-center justify-center">
      <div>
        <h1>Version: 1.0.12</h1>
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
  gtag("consent", "update", {
    ad_user_data: "granted",
    ad_personalization: "granted",
    ad_storage: "granted",
    analytics_storage: "granted",
  });
}

const eraseCookie = (name) => {
  document.cookie =
    name +
    "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=.lexxo.vercel.app;Max-Age=0;";
};

// example: react to a cookie being accepted
watch(
  () => cookiesEnabledIds.value,
  (current) => {
    console.log(current);

    const { initialize, gtag } = useGtag();

    initialize();

    gtag("consent", "update", {
      ad_user_data: current?.includes("user-data") ? "granted" : "denied",
      ad_personalization: current?.includes("personalization")
        ? "granted"
        : "denied",
      ad_storage: current?.includes("storage-and-analytics")
        ? "granted"
        : "denied",
      analytics_storage: current?.includes("storage-and-analytics")
        ? "granted"
        : "denied",
    });

    if (!current?.includes("storage-and-analytics")) {
      eraseCookie("_ga");
      eraseCookie("_ga_5FK73WVJ8L");
    }

    // cookie with id `google-analytics` got added
    window.location.reload(); // placeholder for your custom change handler
  },
  { deep: true }
);
</script>
