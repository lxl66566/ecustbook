# 贡献指南

虽然是个人项目，但还是欢迎贡献，包括但不限于：

- 补充信息
- 创建文章与评论
- 删除过时/错误信息

## 贡献流程

有不懂的可以问 GPT。

```sh
git clone https://github.com/lxl66566/ecustbook.git -b main
cd ecustbook
pnpm i      # 安装依赖
pnpm dev    # 预览
# ... 修改文章
pnpm build  # 请在提交前尝试构建，确保没有出现错误
```

## 注意事项

1. 使用 [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) 进行 markdown 格式化。
2. 所有非矢量图片均需要压缩。您可以使用 [imagestool](https://imagestool.com/compress-images)；如果图片对画质要求不高，可以进一步降低压缩后图片质量。
3. 尽可能遵循[中文文案排版指北](https://github.com/sparanoid/chinese-copywriting-guidelines/blob/master/README.zh-Hans.md)进行排版，主要是加空格的部分。
