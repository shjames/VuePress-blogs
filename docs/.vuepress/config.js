module.exports = {
  title: "我的博客",
  description: "这是我的个人博客",
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "违规扣分", link: "/subjectOne/" },
      { text: "交通标线", link: "/subjectOne/traffic-marks/" },
      { text: "交通标记", link: "/subjectOne/traffic-lines/" },
      { text: "驾驶证登记处罚", link: "/subjectOne/license-penalty/" },
      { text: "速度相关", link: "/subjectOne/traffic-speed/" },
      { text: "刑事处罚", link: "/subjectOne/traffic-criminal-punishment/" },
      { text: "罚款相关", link: "/subjectOne/traffic-amerce/" },
      { text: "其他分类题目", link: "/subjectOne/traffic-other/" },
      { text: "模拟考试错误收集", link: "/subjectOne/mock-exam-errors/" },
    ],
    sidebar: {
      "/subjectOne/": [
        "",
        "traffic-marks/",
        "traffic-lines/", // 交通标线
        "license-penalty/", //驾驶证登记处罚
        "traffic-speed/", // 速度相关题目
        "traffic-criminal-punishment/",
        "traffic-amerce/",
        "traffic-other/", // 其他分类题目
        "mock-exam-errors/", // 模拟考试错误收集
      ],
      "/": [""],
    },
  },
};
