import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://lxl66566.github.io",
  logo: "/logo.jpg",
  repo: "https://github.com/lxl66566/ecustbook",
  docsDir: "src",
  navbar,
  sidebar,
  editLink: true,
  contributors: true,
  breadcrumb: false,
  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Repo", "TelegramLink", "RSSLink", "Outlook", "Search"],
  },
  markdown: {
    align: true,
    alert: true,
    // attrs: true,
    imgLazyload: true,
    imgSize: true,
    imgMark: true,
    figure: true,
    include: true,
    spoiler: true, // https://theme-hope.vuejs.press/zh/guide/markdown/stylize/spoiler.html
    hint: true,
    mark: true,
    footnote: true,
    tabs: true,
    tasklist: true,
    mermaid: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended",
            };
        },
      },
    ],
  },
  plugins: {
    blog: { excerptLength: 1 },
    icon: {
      assets: ["fontawesome-with-brands"],
      prefix: "fas fa-",
    },
    comment: {
      provider: "Giscus",
      repo: "lxl66566/ecustbook",
      repoId: "R_kgDOLle5Lg",
      category: "General",
      categoryId: "DIC_kwDOLle5Ls4CnxY2",
      strict: true,
      mapping: "pathname",
      lightTheme: "light",
      darkTheme: "transparent_dark",
    },
    feed: {
      rss: true,
      count: 20,
    },
    slimsearch: {
      indexContent: true,
    },
  },
});
