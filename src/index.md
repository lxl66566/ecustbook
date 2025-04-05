---
# https://github.com/vuepress-theme-hope/vuepress-theme-hope/blob/main/demo/theme-blog/src/README.md?plain=1

home: true
layout: BlogHome
title: 首页
heroText: ECUSTBOOK

projects:
  - name: SurviveSJTU
    desc: 上海交通大学生存手册
    link: https://survivesjtu.gitbook.io/survivesjtumanual/
    icon: tablet
  - name: Ecust CourseShare
    desc: 致力于构建共建共治共享的 ECUST 课程攻略共享库，可以找到各种课程的资料。
    icon: boxes-stacked
    link: https://github.com/tianyilt/ecust-CourseShare
  - name: ECUST WIKI
    desc: 一个类似北洋维基的校园生存指南
    icon: fa-brands fa-wikipedia-w
    link: https://wiki.cic.cab/
  - name: ECUSTLEAP
    desc: 华理飞跃手册，一本记载着华理学生在出国，考研，保研，求职等方面的心得体会的手册。
    icon: rocket
    link: https://ecust-leap.github.io/
  - name: 华理电费统计
    desc: 拒绝一切不透明操作。
    icon: bolt
    link: https://github.com/lxl66566/ecust-electricity-statistics
  - name: my-college-files
    desc: 华理信息工程专业资料全收集
    icon: boxes-stacked
    link: https://github.com/lxl66566/my-college-files
  - name: 本科教务处 RSS
    desc: 不怕错过教务消息。
    icon: rss
    link: https://docs.rsshub.app/zh/routes/university#本科教务处信息网
---

<br/>

之前我将学校相关的内容写在[个人博客](https://absx.pages.dev/)，现将其分离为单独项目。

本书原本的目的应该是类似于 wiki 的信息集合，不过现在已逐渐成为我个人的大学生活回忆录。大家就当成回忆录来看就好了。

## QA

- 为什么有了 [wiki](https://wiki.cic.cab/) 以后还需要这个项目呢？

确实不需要，这里只是我的瞎 BB 罢了。虽说 wiki 里也有许多主观评价，但这里的言论会更加主观，~~更加具有攻击性~~。

- 为什么使用 Vuepress theme hope？

出于某些目的我需要更高的可扩展性。我最熟的是 Vuepress，但我喜欢尝试新玩意，于是刚开始我用 Rspress 写。然后 MDX 太难用了 [^1][^2]（当时我还不会 jsx），还是改成了习惯的 vue 系列，就用了 Vitepress。后来又换成了与我博客相同的 Vuepress theme hope。

[^1]: <https://t.me/withabsolutex/1501>
[^2]: <https://t.me/withabsolutex/1533>
