const {defaultTheme} = require('vuepress')
const {searchPlugin} = require('@vuepress/plugin-search')
const zhENSidebar = require("./configs/zh_EN/index")
const enUSSidebar = require("./configs/en_US/index")
const isDev = process.env.NODE_ENV === 'development';
module.exports = {
    base: isDev ? '/' : '/rac-white-paper/',

    locales: {
        '/': {
            lang: 'zh-CN',
            title: 'BuryDAO',
            description: 'BuryDAO 白皮书',
        },
        '/en_US/': {
            lang: 'en-US',
            title: 'BuryDAO',
            description: 'BuryDAO White Paper',
        },
    },
    theme: defaultTheme({
        contributors: false,
        locales: {
            '/': zhENSidebar,
            '/en_US/': enUSSidebar,
        },
    }),
    plugins: [
        searchPlugin({
            locales: {
                '/': {
                    placeholder: '搜索',
                },
                '/en_US': {
                    placeholder: 'Search',
                },
            },
        }),
    ],
}