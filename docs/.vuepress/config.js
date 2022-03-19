module.exports = {
  title: 'Jay\'s Blog',
  description: '沉淀，输出，始于2022',
  theme: 'reco',
  base: '/blog/',
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
    subSidebar: 'auto',
    lastUpdated: '更新时间', // string | boolean
    // 顶部导航栏https://vuepress.vuejs.org/zh/theme/default-theme-config.html#%E5%AF%BC%E8%88%AA%E6%A0%8F
    nav: [
      { text: '首页', link: '/' },
      { text: 'React', link: '/react/basic-hooks'},
      // { text: '面试集文', link: '/interview' },
      // { text: '工具推介', link: '/tools' },
      // {
      //   text: '大佬博客',
      //   item: [
      //     { text: '冴羽', link: 'https://github.com/mqyqingfeng/blog' }
      //   ]
      // },
    ],
    // 侧边栏
    sidebar: [
      {
        title: '欢迎来到Jay的小屋',
        path: '/',
        collapsable: false, // 不折叠
      },
      {
        title: 'React Hooks用法',
        path: '/react',
        collapsable: false, // 不折叠
        children: [
          { title: "Hooks基本用法", path: "/react/basic-hooks" },
          { title: "自定义Hooks", path: "/react/custom-hooks" },
        ]
      },
      {
        title: '面试相关',
        path: '/interview',
        collapsable: false, // 不折叠
        children: [
          { title: "反问面试官", path: "/interview/ask-interviewer" },
        ]
      },
    ],
  }
}