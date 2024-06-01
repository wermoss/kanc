<template>
  <div class="w-full flex items-center">
    <div class="w-screen h-screen flex items-center justify-center">
      <div>
        <h1>Version: 1.0.9</h1>
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

    const permissions = {};

    if (current?.includes("user-data")) {
      permissions.ad_user_data = "granted";
    }

    if (current?.includes("personalization")) {
      permissions.ad_personalization = "granted";
    }

    if (current?.includes("storage")) {
      permissions.ad_storage = "granted";
    }

    if (current?.includes("analytics")) {
      permissions.analytics_storage = "granted";
    }

    gtag("consent", "update", permissions);

    // if (current?.includes("gtm")) {
    //   const { initialize } = useGtag();
    //   initialize();
    //   allConsentGranted();
    // } else {
    //   eraseCookie("_ga");
    //   eraseCookie("_ga_5FK73WVJ8L");
    // }

    // cookie with id `google-analytics` got added
    window.location.reload(); // placeholder for your custom change handler
  },
  { deep: true }
);
</script>
