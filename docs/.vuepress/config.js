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
      { text: "科目四", link: "/subjectFour/" },
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
      "/subjectFour/": ["", "study-notes/"],
    },
  },
};
