// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
],
//propriedade para deslizar para o link dentro da pagina
css: ['/assets/css/scroll.css'],
  devtools: { enabled: true }
})
