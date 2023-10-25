// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui"],
  ui: {
    icons: ["simple-icons", "heroicons", "mdi"],
  },
  app: {
    head: {
      link: [
        {
          key: "link-manifest",
          rel: "manifest",
          href: "/site.webmanifest",
        },
        {
          key: "link-icon",
          rel: "icon",
          href: "/favicon.ico",
        },
      ],
    },
  },
});
