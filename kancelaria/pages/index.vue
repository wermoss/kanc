
<template>
<div class="w-full flex items-center">
  <div class="w-screen h-screen flex items-center justify-center">
    <div>
      
      <div><CookieControl /></div>

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
} = useCookieControl()

// example: react to a cookie being accepted
watch(
  () => cookiesEnabledIds.value,
  (current, previous) => {
    if (
      !previous?.includes('gtm') &&
      current?.includes('gtm')
    ) {
      // cookie with id `google-analytics` got added
      window.location.reload() // placeholder for your custom change handler
    }
  },
  { deep: true },
)
</script>
<style></style>