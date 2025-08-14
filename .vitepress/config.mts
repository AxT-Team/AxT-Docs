import { defineConfig } from 'vitepress'
import { defineTeekConfig } from "vitepress-theme-teek/config";
import Permalink from "vitepress-plugin-permalink";
import { MermaidMarkdown, MermaidPlugin } from 'vitepress-plugin-mermaid';

// 站点信息描述
const description = [
  "欢迎来到 AxT 的官方文档",
  "AxT 成立于 2022年10月15日，由 XiaoXian（Darf）领导原Axtn团队成员创立的一个创新团体。"
].toString();

// Teek 主题配置
const teekConfig = defineTeekConfig({
  author: {
    name: "AxT-Team", // 作者名称
    link: "https://github.com/AxT-Team", // 点击作者名称后跳转的链接
  },
  footerInfo: {
    theme: {
      name: `Theme By Teek@1.3.5`,
    },
    copyright: {
      createYear: 2022,
      suffix: "AxT",
    },
  },
  articleShare: { enabled: true },
  codeBlock: {
    copiedDone: TkMessage => TkMessage.success("复制成功！"),
  },
  vitePlugins: {
    sidebar: true,
    sidebarOption: {
      initItems: false,
    },
    permalink: true,
  },
  breadcrumb: {
    enabled: true, // 是否启用面包屑
    showCurrentName: false, // 面包屑最后一列是否显示当前文章的文件名
    separator: "/", // 面包屑分隔符
  },
  articleUpdate: {
    enabled: false, // 是否启用文章最近更新栏
  },
  themeEnhance: {
    spotlight: {
      defaultValue: false,
      disabled: true,
    },
  },
});

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "AxT Docs | 文档",
  extends: teekConfig,
  base: '/',
  vite: {
    plugins: [Permalink(/* options */), MermaidPlugin()],
    optimizeDeps: {
      include: ['mermaid'],
    },
    ssr: {
      noExternal: ['mermaid'],
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "关于AxT Network", link: "/" },
      { text: "EasyLan", link: "/EasyLan/guide/intro", activeMatch: "/70.EasyLan/" },
      {
        text: 'AxTBot', items: [
          { text: 'AxTBot v2.1', link: '/axtbot/v2.1/guide/intro', activeMatch: '/88.AxTBot-v2.1/' },
          { text: 'AxTBot v2', link: '/axtbot/v2', activeMatch: '/89.AxTBot-v2/' },
          { text: 'AxTBot v1', link: '/axtbot/v1', activeMatch: '/90.AxTBot-v1/' },
        ]
      },
    ],
    logo: {
      light: "https://static.axtn.net/logo/AxT.png",
      dark: "https://static.axtn.net/logo/AxT_invert.png",
    },
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    lastUpdatedText: "上次更新时间",
    outline: {
      level: [2, 4],
      label: "本页导航",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    socialLinks: [{ icon: "github", link: "https://github.com/AxT-Team" }],
    search: {
      provider: "local",
    },
  },
  head: [
    ["link", { rel: "icon", type: "image/png", href: "https://static.axtn.net/logo/AxT.png"}],
    ["meta", { property: "og:type", content: "website" }],
    ["meta", { property: "og:locale", content: "zh-CN" }],
    ["meta", { property: "og:title", content: "AxT Docs | AxT" }],
    ["meta", { property: "og:site_name", content: "AxT Network 官方文档" }],
    ["meta", { property: "og:image", content: "" }],
    ["meta", { property: "og:url", content: "" }],
    ["meta", { property: "og:description", description }],
    ["meta", { name: "description", description }],
    ["meta", { name: "author", content: "AxT" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
      },
    ],

    ["meta", { name: "keywords", description }],
  ],
  markdown: {
    // 开启行号
    lineNumbers: true,
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true,
    },
    // 更改容器默认值标题
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
    config(md) {
      md.use(MermaidMarkdown);
    },
  },
  
})
