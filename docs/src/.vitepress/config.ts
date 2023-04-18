import { defineConfig } from 'vitepress';
// import MarkdownPreview from 'vite-plugin-markdown-preview';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'Torrer-UI',
  description: 'A UI Lib Based On Vue3 + Ts',
  // srcDir: './src',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    // ['link', { rel: 'stylesheet', href: 'https://g.alicdn.com/thx/cube/1.3.2/cube.min.css' }],
  ],
  // rewrites: {
  //   'components/[cpts].md': './[cpts].md',
  // },
  themeConfig: {
    logo: '/logo.png',
    nav: [
      { text: '首页', link: '/' },
      { text: '示例', link: '/guide/index' },
      { text: '组件', link: '/components/index' },
    ],

    sidebar: {
      '/guide/': [
        {
          text: '基础',
          items: [
            // { text: 'Markdown Examples', link: '/markdown-examples' },
            // { text: 'Runtime API Examples', link: '/guide/api-examples' },
            { text: '安装', link: '/guide/install' },
            { text: '快速上手', link: '/guide/quickstart' },
          ],
        },
      ],
      '/components': [
        {
          text: '表单组件',
          items: [
            { text: '按钮 Button', link: '/components/button/index' },
            { text: '图标 Icon', link: '/components/icon/index' },
            { text: '布局 Layout', link: '/components/layout/index' },
          ],
        },
      ],
    },

    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
  },
  vite: {
    // plugins: [MarkdownPreview()],
  },
  markdown: {
    toc: {},
  },
});
