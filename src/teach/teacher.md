# 教师评价

为了避免人身攻击的嫌疑，我对部分信息进行了一些微小的处理。有至少两个方法能看到原文，懂的都懂，我在这里不过多解释。

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
      <td>{{ base64(item.grade) }}</td>
      <td>{{ base64(item.evaluation) }}</td>
      <td>{{ base64(item.contact) }}</td>
    </tr>
  </tbody>
</table>

<script setup>
const data=[
  {
    name: "John Doe",
    course: "Mathematics",
    grade: "A",
    evaluation: "Excellent student",
    contact: "123-456-7890",
  },
];
const base64 = (str) => {
  return btoa(str);
};
</script>
