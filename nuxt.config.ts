// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: false },
  css: [
    '~/assets/styles/main.scss',
    // '@fancyapps/ui/dist/fancybox/fancybox.css'
    '~/assets/styles/main.css',
  ],
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/icon',
    '@nuxt/image',
    '@nuxtjs/color-mode',
    '@pinia/nuxt',
    '@nuxt/ui',
  ],
  colorMode: {
    preference: 'system',
    fallback: 'light',
    dataValue: 'theme',
    classSuffix: '',
  },
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
  },
});
