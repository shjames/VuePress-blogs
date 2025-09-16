module.exports = {
  chainWebpack: (config, isServer) => {
    config.module
      .rule("images")
      .test(/\.(png|jpe?g|gif|webp)(\?.*)?$/)
      .use("url-loader")
      .loader("url-loader")
      .tap((options) => Object.assign(options, { limit: 10240 }));
  },
  title: "我的博客",
  description: "这是我的个人博客",
  themeConfig: {
    nav: [
      { text: "科目一", link: "/subjectOne/" },
      { text: "科目二", link: "/subjectTwo/" },
      { text: "科目三", link: "/subjectThree/" },
      { text: "科目四", link: "/subjectFour/" },
      { text: "真实上路", link: "/onTheRoad/" },
      { text: "福建旅游攻略", link: "/tourismGuideToFujianProvince/" },
    ],
    sidebar: {
      "/subjectOne/": [
        "", // /subjectOne/README.md
        "traffic-marks/",
        "traffic-lines/",
        "license-penalty/",
        "traffic-speed/",
        "traffic-criminal-punishment/",
        "traffic-amerce/",
        "traffic-other/",
        "traffic-gestures/",
        "mock-exam-errors/",
        "key-breakthrough/",
      ],
      "/subjectTwo/": [
        "", // /subjectTwo/README.md
        "image-guide/", // 图文说明子路由
        "key-notes/", // 科目二通关秘籍 重点笔记
      ],
      "/subjectThree/": [
        "", // /subjectThree/README.md
        "driving-skills/", // 驾驶技巧
        "exam-points/", // 考试要点
        "preview-notes/", // 预习笔记
        "practice-summary/", // 实操复盘总结笔记
        "deduction-details/", // 科目三所有扣分细节
        "exam-route-notes/", // 考试路线笔记
        "exam-route-comparison/", // 线路对比
        "pre-exam-practice/", // 考试前练车实操笔记
        "pre-exam-key-points/", // 考前重点笔记
      ],
      "/subjectFour/": ["", "study-notes/"],
      "/onTheRoad/": ["", "car-rental/"],
      "/tourismGuideToFujianProvince/": [""],
    },
  },
};
