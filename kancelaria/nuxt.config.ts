export default defineNuxtConfig({
    app: {
        head: {
            title: 'Playground',
            meta: [
                { hid: 'robots', name: 'robots', content: 'noindex' },
            ],
        },
    },
    modules: [
        '@dargmuesli/nuxt-cookie-control',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
        'nuxt-gtag',
    ],
    gtag: {
        id: 'G-5FK73WVJ8L',
        initCommands: [
            // Setup up consent mode
            [ 'consent', 'default', {
                ad_user_data: 'denied',
                ad_personalization: 'denied',
                ad_storage: 'denied',
                analytics_storage: 'denied',
                wait_for_update: 500,
            } ],
        ],
    },
    typescript: {
        includeWorkspace: true,
    },
    ssr: false,
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
                    targetCookieIds: [ '_ga', '_ga-<token>' ],
                    cookies: [ '_ga', '_ga_5FK73WVJ8L' ],
                    accepted: () => {
                        console.log('Google Tag Manager accepted');
                    },
                },
            ],
        },
        isCookieIdVisible: false,
        locales: [ 'en', 'de' ],
        localeTexts: {
            de: {
                iframeBlocked: 'Bitte funktionale Cookies aktivieren:',
            },
        },
    },
});
//   css: [
//     '~/assets/css/global.css'
//   ],

// })