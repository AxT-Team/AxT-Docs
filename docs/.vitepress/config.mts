import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "AxT Docs | 文档",
  description: "AxT社区项目文档站点",
  lastUpdated: true,
  themeConfig: {
    logo: '/favicon.ico',
    nav: [
      { text: '文档', link: '/' },
      { text: 'AxTBot', link: '/AxTBot/' }
    ],

    sidebar: [
      { text: '关于AxT Network', link: '/' },
      {

        text: 'AxTBot',
        collapsed: false,
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
      copyright: 'Copyright © 2023-2024 AxT Inc. All rights reserved'
    }
  }
})
