module.exports = {
  mode: "spa",
  head: {
    titleTemplate: "%s - " + "pav",
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  loading: { color: "#fff" },
  css: [{ src: "@/styles/index.scss", lang: "scss" }],
  plugins: [],
  buildModules: ["@nuxtjs/vuetify", "@nuxt/typescript-build"],
  modules: [
    ["vue-loader", "nuxt-sass-resources-loader", ["@/styles/index.scss"]],
    [
      "@nuxtjs/google-analytics",
      {
        id: "UA-132779419-2"
      }
    ],
    [
      "@nuxt/typescript-build",
      {
        typeCheck: true,
        ignoreNotFoundWaringns: true
      }
    ],
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
    "@nuxtjs/pwa"
  ],
  manifest: {
    name: "pav portfolio",
    short_name: "pav pf",
    lang: "ja"
  },
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},
  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ["@/assets/variables.scss"],
    theme: {
      light: true
    }
  },
  build: {},
  debug: {
    enabled: true,
    sendHitTask: true
  }
};
