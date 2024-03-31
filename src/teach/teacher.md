# 教师评价

为了避免人身攻击的指控，我对部分信息进行了一些微小的处理。有至少两个方法能看到原文，懂的都懂，我在这里不过多解释。

<table>
  <thead>
    <tr>
      <th>名字</th>
      <th>课程</th>
      <th>打分</th>
      <th>评价</th>
      <th>联系方式</th>
    </tr>
  </thead>
  <tbody>
    <tr v-for="(item, index) in data" :key="index">
      <td>{{ item.name }}</td>
      <td>{{ item.course }}</td>
      <td>{{ item.score }}</td>
      <td>
        <Badge v-for="sub in item.badge" :text="sub ? encode(sub) : ''" />
        <dtlslong noshort=20 :text="item.evaluation ? encode(item.evaluation) : ''" />
        <span v-for="(link, index2) in item.link">
          <a :href="link" target="_blank">{{ index2 + 1 }}</a>
          &thinsp;
        </span>
      </td>
      <td><dtlslong noshort=20 :text="item.contact || ''" /></td>
    </tr>
  </tbody>
</table>

<script setup>
import { encode } from 'js-base64';
import dtlslong from '../.vitepress/theme/dtlslong.vue';
const data=[
  {
    name: "罗小娟",
    course: "操作系统",
    score: 4,
    evaluation: "平等，活跃；教学质量一般",
    contact: "luoxj@ecust.edu.cn 徐汇 19 817"
  },
  {
    name: "袁伟娜",
    course: "通信原理",
    score: 1.7,
    badge: ["提问"],
    evaluation: "平时分与作业正确率无关",
    contact: "wnyuan@ecust.edu.cn"
  },
  {
    name: "叶炯耀",
    course: "集成电路",
    score: 2,
    badge: ["提问", "废话多"],
    evaluation: "爱聊天，有点经验但不多",
    contact: "Q:1194678751 V:shkevino912"
  },
  {
    name: "李钰",
    course: "电磁场",
    score: 2,
    badge: ["提问", "限座位","温和"],
    evaluation: "最喜欢提问后排同学",
    contact: "liyu@ecust.edu.cn"
  },
  {
    name: "程华",
    course: "互联网",
    score: 2.0,
    badge: ["电子版"],
    evaluation: "作业不发答案；实践不教，纯自己查资料；后期每节课都点全班名"
  },
  {
    name: "凌小峰",
    course: "通信电子线路",
    score: 3.0,
    evaluation: "作业多，讲课抽象；实验遇到问题会手把手教",
    contact: "xfling@ecust.edu.cn"
  },
  {
    name: "万永菁",
    course: "DSP",
    score: 8.0,
    evaluation: "线上下结合，课前给所有学生打印教学计划和作业；但是作业过多",
    contact: "13817781630 Q:2447131015 V:ecust_wyj wanyongjing@ecust.ecu.cn"
  },
  {
    name: "吴粤",
    course: "算法导论",
    score: 5.0,
    evaluation: "较现代，但是有些方面又觉得像在古代",
    contact: "Q:1769013250 V:mathwuyue yuewu@ecust.edu.cn yue.wu@etalkai.com"
  },
  {
    name: "朱宏擎",
    course: "人工智能基础",
    score: 3.0,
    evaluation: "非常多的课堂练习；作业不许迟交"
  },
  {
    name: "王嵘",
    course: "代信号实验",
    score: -1.0,
    evaluation: "我对其不会有半点尊敬。",
    link: ["https://t.me/withabsolutex/1114", "https://t.me/withabsolutex/1115", "https://t.me/withabsolutex/1126"],
  },
  {
    name: "顾晓艳",
    course: "大物实验",
    score: 8.0,
    evaluation: "温和，讲解清楚，手把手教"
  },
  {
    name: "木昌洪",
    course: "数字系统设计",
    score: 2.0,
    badge: ["口音","占课", "废话"],
    evaluation: "教得很烂，不过至少专业性没有问题；平时分高，哥几个都是 90+",
    contact: "18017887078 changhongmu@ecust.edu.cn"
  },
  {
    name: "郭继明",
    course: "概率论",
    score: 4.5,
    badge: ["半开卷", "电子版"],
    evaluation: "温和，然而本人考勤 1/3，作业全交且几乎全 A，考试 82，平时分只有 80.我不是很认可。",
    contact: "jimingguo@hotmail.com"
  },
  {
    name: "朱煜",
    course: "信号与系统",
    score: 7.0,
    badge: ["电子版"],
    evaluation: "有学识，随和，懂新闻",
    contact: "13817566582",
    link: ["https://t.me/withabsolutex/945"],
  },
  {
    name: "翟洁",
    course: "JAVA",
    badge: ["PPT"],
    score: 2.5,
    evaluation: "喜欢提问，上课无聊，会让同学去讲解 ppt"
  },
  {
    name: "李振坡",
    course: "模电",
    score: 2.8,
    evaluation: "上课质量低，知识点讲不清楚；极其喜欢点名；作业少",
    contact: "lizhenpo@ecust.edu.cn"
  },
  {
    name: "秦美珠",
    course: "马原",
    score: 3.0,
    badge: ["限座位"],
    evaluation: "只能坐前 8 排，左侧不坐人；较佛系"
  },
  {
    name: "宣沁",
    course: "体育篮球男",
    score: 6.0,
    evaluation: "现代化教学，会聊天；力量训练量不合理"
  },
  {
    name: "张驰",
    course: "毛概",
    score: 0.5,
    badge: ["限手机", "限座位"],
    evaluation: "不能坐后四排；严肃，过于热情的粉红，一句话总要讲两遍，上课声大"
  },
  {
    name: "黄如",
    course: "电路原理，物联网",
    score: 3.0,
    badge: ["拖占课", "废话", "签到多"],
    evaluation: "过于热情，讲课进度慢，复习资料漏知识点；非常喜欢签到"
  },
  {
    name: "陈宁",
    course: "MATLAB 写作与表达",
    score: 4,
    badge: ["PPT"],
    evaluation: "甚至没听说过 MATLAB Online",
    contact: "nchen@ecust.edu.cn 13611758166"
  },
  {
    name: "蒋翠玲",
    course: "数据结构",
    score: 3.0,
    badge: ["PPT"],
    evaluation: "比较好交流；堪忧，困扰于低级问题",
    contact: "cuilingjiang@ecust.edu.cn"
  },
  {
    name: "徐国民",
    course: "毛概",
    score: 6.0,
    evaluation: "佛系，能够清晰地作出通知"
  },
  {
    name: "陈家云",
    course: "体育龙舟男",
    score: 4.5,
    evaluation: "给分明确，教学一般"
  },
  {
    name: "朱焱",
    course: "复变",
    score: 8.5,
    badge: ["电子版"],
    evaluation: "温和，教学良好",
    contact: "zhuygraph@ecust.edu.cn"
  },
  {
    name: "王瑞超",
    course: "形势政策 道德法治",
    score: 10.5,
    evaluation: "尊重学生个性，聊天型课堂",
    contact: "wrc0475@163.com"
  },
  {
    name: "章登宏",
    course: "大物",
    score: 4.0,
    badge: ["口音"],
    evaluation: "平时分高，心善，是好老师；上课质量低，催眠",
    contact: "13816448336 1694888619@qq.com"
  },
  {
    name: "马丽丽",
    course: "大英",
    score: 6.8,
    evaluation: "捞人，平时分不低，课堂氛围轻松；互动过多",
    contact: "masha1004@163.com"
  },
  {
    name: "吕雪芹",
    course: "高数",
    score: 6.0,
    evaluation: "认真负责；作业量过多"
  },
  {
    name: "李昱瑾",
    course: "Python",
    score: 5,
    badge: ["PPT"],
    contact: "yjli@ecust.edu.cn 76076306"
  },
  {
    name: "施劲松",
    course: "线代",
    score: 7,
    badge: ["废话多"],
    evaluation: "声情并茂，逻辑清晰，教学质量高；故意激起内卷"
  },
  {
    name: "李萍",
    course: "大英",
    score: 6,
    evaluation: "佛系"
  },
  {
    name: "赵妍君",
    course: "军理",
    score: 6,
    evaluation: "对该课的水有清晰认知，高度自由"
  },
  {
    name: "刘阳（退休）",
    course: "近代史",
    score: 6.0,
    evaluation: "负责；严肃"
  },
  {
    name: "施家瑜",
    course: "体育羽毛球男",
    score: 0,
    evaluation: "给分极低，布置远超身体极限的训练量"
  },
  {
    name: "冯作龙",
    course: "体育网球男",
    score: 8.0,
    evaluation: "给分高，平易近人"
  },
  {
    name: "李继根",
    course: "高数",
    score: 6.5,
    evaluation: "平时分高，佛系，懂青年"
  }
];
</script>
