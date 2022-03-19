module.exports = {
    title: "完全自杀手册",
    description: '自杀，从入门到入土',
    base: '/',
    repo: 'vuejs/vitepress',
    themeConfig: {
        // tip: "提示",
        // warning: "注意",
        // danger: "警告",
        nav: [
            { text: '首页', link: '/' },
        ],
        sidebar: [
            { text: '第一章 前言', link: '/chapter-1/' },
            { text: '第二章 Taking Medicines 药物', link: '/chapter-2/' },
            { text: '第三章 Hanging 上吊', link: '/chapter-3/' }
        ]
    }
}