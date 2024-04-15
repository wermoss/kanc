export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      gtm_id: 'GTM-59LPWQ79',
      gtm_status: true,
    }
  },
  app: {
    head: {
      title: 'Playground',
    },
  },
  modules: ['@dargmuesli/nuxt-cookie-control', '@nuxtjs/tailwindcss'],
  typescript: {
    includeWorkspace: true,
  },

  // module options
  cookieControl: {
    colors: {
      checkboxActiveBackground: '#00A34A', // text-green-600
    },
    closeModalOnClickOutside: true,
    cookies: {
      necessary: [],
      optional: [
        {
          name: 'Google Tag Manager',
          id: 'gtm',
          targetCookieIds: ['_ga', '_ga_5FK73WVJ8L'],
        },
      ],
    },
    isCookieIdVisible: true,
    locales: ['en', 'de'],
    localeTexts: {
      de: {
        iframeBlocked: 'Bitte funktionale Cookies aktivieren:',
      },
    },
  },
})
//   css: [
//     '~/assets/css/global.css'
//   ],
  
// })