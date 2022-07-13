import {defaultTheme, defineUserConfig} from 'vuepress'
import {searchPlugin} from '@vuepress/plugin-search'
import zhENSidebar from "./configs/zh_EN"
import enUSSidebar from "./configs/en_US"
import {localTheme} from "./theme";
import {tocPlugin} from "@vuepress/plugin-toc";

const isDev = process.env.NODE_ENV === 'development';
export default defineUserConfig({
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
    theme: localTheme({
        contributors: false,
        locales: {
            '/': zhENSidebar,
            '/en_US/': enUSSidebar,
        },
    }),
    plugins: [
        tocPlugin({
            // 配置项
        }),
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
});