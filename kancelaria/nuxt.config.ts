
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Playground',
      meta: [
        { hid: 'robots', name: 'robots', content: 'noindex' }
      ]
    },
  },
  modules: ['@dargmuesli/nuxt-cookie-control', '@nuxtjs/tailwindcss', '@nuxtjs/i18n'],
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
          id: '_ga',
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