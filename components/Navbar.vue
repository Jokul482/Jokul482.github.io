<script setup lang='ts'>
const { blog } = useAppConfig();
const link = blog.project.link;
const menu = blog.layout;
</script>
<template>
    <div class="flex space-x-4 text-sm items-center">
        <template v-for="(item, i) in menu.menus" :key="i">
            <nuxt-link :to="item.to" class="">
                <span class="text-gray-700 dark:text-gray-300">{{ item.title }}</span>
            </nuxt-link>
        </template>
    </div>
    <div class="pl-4 flex space-x-3 text-xl">
        <div class="flex items-center"></div>
        <nuxt-link :to="link.github" class="dark:text-gray-400 text-gray-600">
            <Icon name="grommet-icons:github" />
        </nuxt-link>
    </div>
</template>
