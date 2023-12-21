<script setup lang='ts'>
const { blog } = useAppConfig();
const link = blog.project.link;
</script>
<template>
    <div class="pl-4 flex space-x-3 text-xl">
        <div class="flex items-center"></div>
        <nuxt-link :to="link.github" class="dark:text-gray-400 text-gray-600">
            <Icon name="mdi:github-face" />
        </nuxt-link>
    </div>
</template>
<style lang='scss' scoped>

</style>