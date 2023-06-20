import { defineConfig } from 'vitepress'
import { getPosts } from './theme/serverUtils'

//每页的文章数量
const pageSize = 10

export default defineConfig({
    title: 'fat.cat',
    lang: 'zh-Hans',
    cleanUrls: true,
    cacheDir: './node_modules/vitepress_cache',
    description: 'fat cat blog',
    ignoreDeadLinks: true,
    markdown: {},
    themeConfig: {
        docFooter: {
            prev: '上一页',
            next: '下一页'
        },
        lastUpdatedText: '上次更新',
        posts: await getPosts(pageSize),
        website: 'https://github.com/zula1994', //copyright link
        // 评论的仓库地址
        comment: {
            repo: 'zula1994/zula1994.github.io',
            themes: 'github-light',
            issueTerm: 'pathname'
        },
        nav: [
            { text: 'Home', link: '/' },
            { text: '归档', link: '/pages/archives' },
            { text: '标签', link: '/pages/tags' },
            {
                text: '文章',
                items: [
                    {
                        text: 'react',
                        link: '/docs/react/'
                    }
                ]
            },
            { text: '关于我', link: '/pages/about' }
        ],
        sidebar: {
            '/docs/react/': [
                {
                    text: 'Guide',
                    items: [
                        { text: 'Index', link: '/react/' },
                        { text: 'One', link: '/react/one' }
                    ]
                },
                {
                    text: 'Two',
                    items: [{ text: 'Two', link: '/react/Two' }]
                }
            ]
        },
        outlineTitle: '文章摘要'
    },
    srcExclude: ['README.md'], // exclude the README.md , needn't to compiler

    vite: {
        //build: { minify: false }
        server: { port: 5000 }
    }
    /*
      optimizeDeps: {
          keepNames: true
      }
      */
})
