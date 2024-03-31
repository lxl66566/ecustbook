// .vitepress/theme/index.ts
import type { Theme } from "vitepress";
import DefaultTheme from "vitepress/theme";
import heimu from "./heimu.vue";
import dtlslong from "./dtlslong.vue";
import ZoomedImg from "./ZoomedImg.vue";

export default {
	extends: DefaultTheme,
	enhanceApp({ app }) {
		// 注册自定义全局组件
		app.component("heimu", heimu);
		app.component("dtlslong", dtlslong);
		app.component("ZoomedImg", ZoomedImg);
	},
} satisfies Theme;
