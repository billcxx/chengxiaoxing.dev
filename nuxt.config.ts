// https://v3.nuxtjs.org/api/configuration/nuxt.config

export default defineNuxtConfig({
  target: 'static',
  modules: ['@nuxt/content', '@unocss/nuxt'],
  experimental: {
    reactivityTransform: true,
    inlineSSRStyles: false,
  },
  css: [
    '@unocss/reset/tailwind.css',
  ]
})
