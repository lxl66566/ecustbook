# 信息版块

<text style="color:red;">紧急情况：校医院 奉贤 33612123 徐汇 64252637</text>

- [信息办官方信息指南](https://xxb.ecust.edu.cn/jbzs/list.htm)

- 邮寄地址：
  - 奉贤：上海市奉贤区海思路 999 号，邮政编码: 201418
  - 徐汇：上海市徐汇区梅陇路 130 号，邮政编码: 200231
- 在线打印（奉贤 only）：微信小程序搜索 `萌蚤云印` or <http://store.mzyunyin.com/a/index?store_id=971>
- 进入学习平台的~~不一样的链接~~：`https://s.ecust.edu.cn/simpleportal/mh`
- 超星学习通下载直链：`http://cs.e.ecust.edu.cn/download/[objectID]`
- 上传大文件（转自 CIC，未验证）：
  ```sh
  curl --progress-bar 'https://mooc1.chaoxing.com/upload/uploadNew' -H 'Content-Type: multipart/form-data' -H 'Expect: 100-continue' --form "file=@\"${file}\""
  ```
- 学校提供的[免费下载](https://xxb.ecust.edu.cn/7648/list.htm)（虽然并没有什么卵用。。）
  - office, windows 和 matlab 都有更好的渠道。其他的没啥用。
  - 不要下载 VPN 软件（Eazy Connect）！！因为比较流氓，不好卸载。要用 vpn 去 <https://sslvpn.ecust.edu.cn/>。
- 命令行认证校园网：
  - curl
    ```sh
    curl 'http://172.20.13.100:804/include/auth_action.php' -X POST --data 'action=login&username=<学号>&password={B}<Base64密码>&ac_id=18&user_ip=&nas_ip=&user_mac=&ajax=1'
    ```
  - [srun](https://github.com/zu1k/srun)
    ```sh
    srun login -s http://172.20.13.100 -u <学号> -p <密码> -d --acid 18
    ```
