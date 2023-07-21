import { resolve } from "path";
// import 
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // modules: [
  //   '@nuxtjs/eslint-module',
  // ],
  modules:['nuxt-swiper'],
  swiper :{},
  alias: {
    '@': resolve(__dirname, './')
  },
  css: ["~/assets/main.scss"],
  devtools: { enabled: true },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  }
})
