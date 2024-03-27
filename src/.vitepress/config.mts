import { defineConfig } from "vitepress";
import { generateSidebar } from "vitepress-sidebar";

export default defineConfig({
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
	themeConfig: {
		nav: [
			{ text: "关于本书", link: "/about" },
			{ text: "关于教学", link: "/teach/index" },
			{ text: "校园生活", link: "/life/index" },
			{ text: "信息板块", link: "/infomation" },
		],
		sidebar: generateSidebar({
			documentRootPath: "src",
			useTitleFromFileHeading: true,
			useFolderTitleFromIndexFile: true,
			includeFolderIndexFile: true,
			sortMenusByFrontmatterOrder: true,
			excludeFilesByFrontmatter: true,
		}),
		socialLinks: [
			{ icon: "github", link: "https://github.com/lxl66566/ecustbook" },
		],
		editLink: {
			pattern: "https://github.com/lxl66566/ecustbook/edit/main/src/:path",
		},
		lastUpdated: {
			text: "上次更新",
			formatOptions: {
				dateStyle: "full",
				timeStyle: "medium",
			},
		},
		search: {
			provider: "local",
		},
	},
	markdown: {
		math: true,
		image: {
			lazyLoading: true,
		},
		lineNumbers: true,
	},
	sitemap: {
		hostname: "https://lxl66566.github.io/ecustbook",
	},
});
