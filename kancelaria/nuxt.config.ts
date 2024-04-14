
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
      necessary: [
        {
          description: {
            de: 'Dieser Cookie tut etwas.',
            en: 'This cookie does something very very very very very very very long.',
          },
          id: 'n',
          name: {
            de: 'Notwendiger Cookie',
            en: 'Necessary Cookie',
          },
          targetCookieIds: ['NEC'],
        },
      ],
      optional: [
        {
          id: 'gtm',
          name: 'Google Tag Manager',
          onChanged: (enabled) => {
            if (process.client) {
              window['dataLayer'] = window['dataLayer'] || [];
              window['dataLayer'].push({
                'gtm.start': new Date().getTime(),
                event: enabled ? 'gtm.js' : 'gtm.blocked'
              });
            }
          },
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