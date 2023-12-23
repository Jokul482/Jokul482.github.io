<script setup lang='ts'>
const { blog } = useAppConfig();
const link = blog.project.link;
const menu = blog.layout;
</script>
<template>
    <div class="flex space-x-4 text-sm items-center">
        <template v-for="(item, i) in menu.menus" :key="i">
            <nuxt-link :to="item.to" class="">
                <span class="text-primary">{{ item.title }}</span>
            </nuxt-link>
        </template>
    </div>
    <div class="pl-4 flex space-x-3 text-xl">
        <!-- <div class="flex items-center">
            <Icon name="charm:sun" class="text-primary"></Icon>
            <Icon name="akar-icons:moon-fill" class="text-primary"></Icon>
        </div> -->
        <nuxt-link :to="link.github" class="text-primary">
            <Icon name="grommet-icons:github" />
        </nuxt-link>
    </div>
</template>
