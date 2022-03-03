module.exports = {
  description: 'Just playing around',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  base: "/blog/",
  extraWatchFiles: [
    './config.js',
  ],
  markdown: {
    lineNumbers: true,
    // extractHeaders: ['h1', 'h2']
  },
  theme: 'vdoing', //'vuepress-theme-maker',
  // 主题配置
  themeConfig: {
    title: 'VuePress Blog',
    logo: '/assets/img/logo.png',
    searchMaxSuggestions: 6,
    smoothScroll: true,
    // 导航栏
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'CatchCat', link: 'https://www.twoyoung.top/cat-game/' },
    ],
    // 侧边栏
    sidebar: {
      '/': [
        '',
        'about',
        'guide',
        'newborn',
        'tables',
      ]
    },
    displayAllHeaders: true, // 默认值：false
    activeHeaderLinks: false, // 默认值：true
  },
  plugins: []
}