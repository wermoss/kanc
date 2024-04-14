
export default defineNuxtConfig({
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

      optional: [
        {
          name: 'Google Tag Manager',
          id: 'gtm',
          targetCookieIds: ['_ga', 'aaa'],
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