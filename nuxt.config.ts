// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    pageTransition: { name: 'page', mode: 'out-in' },
    head :{
      meta: [
        // {meta name="viewport" content="width=device-width, initial-scale=1"}
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name:"msapplication-TileColor", content:"#da532c"},
        { name: "theme-color", content: "#22223b" },
        { name: "apple-mobile-web-app-title", content: "FrsWebSite" },
        //google-search-console
        { name: "google-site-verification", content: "qpnfAgryYzguxA-S1ZrL4PRq1_WyOnD4EXRTS7S8t2A" }
      ],
      script: [
        // {script src="https://myawesome-lib.js"}{/script}
        // { src: 'https://awesome-lib.js' }
      ],
      link: [
        // {link rel="stylesheet" href="https://myawesome-lib.css"}
        { rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap", },
        { rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=IBM+Plex+Sans+Arabic:wght@100;200;300;400;500;600;700&display=swap" },
        { rel: "icon", type: "image/png", href: "/favicon-96x96.png", sizes: "96x96" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "shortcut icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/site.webmanifest" },
        { rel:"mask-icon", href:"/safari-pinned-tab.svg", color:"#5bbad5"},
      ],
    },
    buildAssetsDir: 'nuxt',
  },

  css: [
    '@/assets/css/index.css',
  ],

  // image: {
  //   provider: 'static',
  //   dir: 'assets/img'
  // },
  // ssr: false,
  // content: {
  //   experimental: {
  //     clientDB: true
  //   }
  // }
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    'nuxt-gtag',
  ],

  devtools: {
    enabled: true,
  },

  gtag: {
    id: 'G-5E6TJ57LCR'
  },

  compatibilityDate: "2024-11-01",
})