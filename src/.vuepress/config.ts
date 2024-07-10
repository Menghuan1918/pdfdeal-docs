import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/pdfdeal-docs/",

  locales: {
    "/": {
      lang: "en-US",
      title: "Docs Demo",
      description: "A docs demo for vuepress-theme-hope",
    },
    "/zh/": {
      lang: "zh-CN",
      title: "pdfdeal",
      description: "pdfdeal 的使用文档",
    },
  },

  theme,

  // Enable it with pwa
  // shouldPrefetch: false,
});
