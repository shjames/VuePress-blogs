module.exports = {
  title: '我的博客',
  description: '这是我的个人博客',
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '科目一考试笔记', link: '/about/' }
    ],
    sidebar: {
      '/about/': [
        '',
        'traffic-marks/',
        'traffic-lines/' // 新增交通标线子路径
      ],
      '/': [
        ''
      ]
    }
  }
}
