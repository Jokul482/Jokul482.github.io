<script setup lang='ts'>
const { blog } = useAppConfig();
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
</template>
<style lang='scss' scoped></style>