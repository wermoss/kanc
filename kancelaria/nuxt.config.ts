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

  // Cookie Control - Module options
  cookieControl: {
    cookieNameIsConsentGiven: 'cookie_control_consent',
    cookieNameCookiesEnabledIds: 'cookie_control_enabled',
    colors: {
      checkboxActiveBackground: '#00A34A',
    },
    closeModalOnClickOutside: true,
    cookies: {
      necessary: [
        {
          name: 'Default cookies',
          id: 'default',
          targetCookieIds: ['cookie_control_consent', 'cookie_control_enabled'],
        },
      ],
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

  css: [
    '~/assets/css/global.css'
  ],
})