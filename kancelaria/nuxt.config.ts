export default defineNuxtConfig({
    app: {
        head: {
            title: 'Playground',
            meta: [
                { hid: 'robots', name: 'robots', content: 'noindex' },
            ],
        },
    },
    modules: [ '@dargmuesli/nuxt-cookie-control', '@nuxtjs/tailwindcss', '@nuxtjs/i18n' ],
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