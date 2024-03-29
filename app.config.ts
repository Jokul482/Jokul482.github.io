export default defineAppConfig({
    blog: {
        name: "飞跃雪山",
        description: "这是一个简单的blog",
        project: {
            link: {
                github: "https://github.com/Jokul482/Jokul-Nuxt3-blog"
            }
        },
        layout: {
            menus: [
                { type: "link", title: "Blog", to: "Blog" },
                { type: "link", title: "Tag", to: "Tag" },
                { type: "link", title: "GovExam", to: "GovExam" },
            ],
        },
        tag: {
            tagList: [
                { type: "前端开发", name: "Css" },
                { type: "前端开发", name: "Javascript" },
                { type: "前端开发", name: "Vue" },
            ]
        },
        author: {
            name: 'Jokul482',
            links: {
                github: 'https://github.com/Jokul482',
            },
        },
    }
})