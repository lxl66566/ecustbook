import { defineUserConfig } from "vuepress";
import { getDirname, path } from "vuepress/utils";
import theme from "./theme.js";

const __dirname = getDirname(import.meta.url);
const temp = defineUserConfig({
  title: "MyEcustBook",
  base: "/ecustbook/",
  description: "My personal book for ecust people.",
  lang: "zh-CN",
  head: [
    [
      "script",
      {
        async: "",
        src: "https://www.googletagmanager.com/gtag/js?id=G-VG6NNCGH6R",
      },
    ],
    [
      "script",
      {},
      `window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-VG6NNCGH6R');`,
    ],
  ],
  theme,
  shouldPrefetch: false,
});

// 用于生成组件的别名，以便于直接在 .md 文件中使用组件
const generateComponentsAlias = (list: string[]) => {
  const temp = {};
  list.forEach((item) => {
    temp[`@${item}`] = path.resolve(__dirname, "components", item + ".vue");
  });
  return temp;
};
// 用于生成数据的别名，以便于直接在 .md 文件中使用数据
const generateDataAlias = (list: string[]) => {
  const temp = {};
  list.forEach((item) => {
    temp[`@@${item}`] = path.resolve(__dirname, "data", item + ".ts");
  });
  return temp;
};
temp.alias = {
  ...generateComponentsAlias(["TeacherAssessment"]),
  // ...generateDataAlias(["article", "gossip", "learning", "job_list"]),
};
export default temp;
