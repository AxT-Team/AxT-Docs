import { defineConfig } from 'vitepress'
import mdItCustomAttrs  from 'markdown-it-custom-attrs'


export default defineConfig({
  title: "AxT Docs | 文档",
  description: "AxT社区项目文档站点",
  lastUpdated: true,
  themeConfig: {
    logo: '/favicon.ico',
    nav: [
      { text: '关于AxT Network', link: '/about' },
      { text: 'AxTBot', items: [
        { text: 'AxTBot v1', link: '/AxTBot/' },
        { text: 'AxTBot v2', link: '/AxTBot-v2/' }
      ]}
    ],
    sidebar: [
      { text: '关于AxT Network', link: '/about' },
      {
        text: 'AxTBot v2',
        collapsed: false,
        items: [
          { text: '简介', link: '/AxTBot-v2/' },
          {
            text: '快速起步',
            collapsed: false,
            items: [
              { text: '使用官方机器人', link: '/AxTBot-v2/start' },
              { text: '自主搭建机器人', link: '/AxTBot-v2/selfhost'}]},
          { text: '配置项', link: '/AxTBot-v2/config' },
          { text: '使用指南', link: '/AxTBot-v2/guide' },
          { text: '开发', 
            collapsed: true, 
            items: [
              { text: '开发指南', link: '/AxTBot-v2/Developer/' },
              { text: '创建第一个插件', link: '/AxTBot-v2/Developer/start' },
              { text: '函数装饰器', link: '/AxTBot-v2/Developer/handle' },
              { text: '内置函数', link: '/AxTBot-v2/Developer/function' },
              { text: '日志记录器', link: '/AxTBot-v2/Developer/logger' },
            ] 
          },
          { text: '常见问题', link: '/AxTBot-v2/Q&A' },
          { text: '绑定面板', link: '/AxTBot-v2/绑定面板' }

        ]},
        {

          text: 'AxTBot v1（已过时）',
          collapsed: true,
          items: [
  
            { text: '如何使用', link: '/AxTBot/如何使用.md' },
            {
  
              text: '指令列表',
              collapsed: false,
              items: [
  
                {
  
                  text: '普通数据查询类',
                  collapsed: true,
                  items: [
  
                    { text: '获取Bot信息', link: '/AxTBot/CommandList/atinfo.md' },
                    { text: '获取热搜榜', link: '/AxTBot/CommandList/hotlist.md' }
  
                  ]
  
                },
                {
  
                  text: '游戏数据查询类',
                  collapsed: true,
                  items: [
  
                    { text: '获取Hypixel玩家信息', link: '/AxTBot/CommandList/hypixel.md' },
                    { text: '获取Minecraft信息', link: '/AxTBot/CommandList/minecraft.md' },
                    { text: '获取Steam用户信息', link: '/AxTBot/CommandList/steam.md' }
  
                  ]
  
                },
                {
  
                  text: 'IP域名查询类',
                  collapsed: true,
                  items: [
  
                    { text: '获取IP信息', link: '/AxTBot/CommandList/ipinfo.md' },
                    { text: '获取IP-Ping信息', link: '/AxTBot/CommandList/ping.md' },
                    { text: '获取域名Whois信息', link: '/AxTBot/CommandList/whois.md' }
  
                  ]
  
                },
                {
  
                  text: '娱乐功能类',
                  collapsed: true,
                  items: [
  
                    { text: '今日人品', link: '/AxTBot/CommandList/jrrp.md' },
                    { text: '赛博之书', link: '/AxTBot/CommandList/ask.md' }
  
                  ]
  
                }
  
              ]
  
            },
  
            { text: '常见问题', link: '/AxTBot/常见问题.md' },
            { text: '绑定面板', link: '/AxTBot/绑定面板.md' }
  
          ]
        }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/AxT-Team' }
    ],

    footer: {
      copyright: 'Copyright © 2023-2025 AxT Inc. All rights reserved'
    }
  },
  markdown:{
    config: (md) => {
        // use more markdown-it plugins!
        md.use(mdItCustomAttrs, 'image', {
            'data-fancybox': "gallery"
        })
    }
  },
  head:[
    [
        "link",
        { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/@fancyapps/ui/dist/fancybox.css" },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/@fancyapps/ui@4.0/dist/fancybox.umd.js" }],
  ]
})
