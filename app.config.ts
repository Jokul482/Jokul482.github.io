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
                { type: "link", title: "Blog", to: "blog" },
                { type: "link", title: "Tag", to:"tag" },
            ],
        },
        author: {
            name: 'Jokul482',
            links: {
                github: 'https://github.com/Jokul482',
            },
        },
    }
})