<script setup lang='ts'>
const { blog } = useAppConfig();
const list = blog.tag.tagList;
</script>
<template>
    <div class="my-6">
        <ul class="flex">
            <li class="me-2 p-2 text-xs bg-slate-200 hover:bg-slate-300 rounded cursor-pointer transition" v-for="(item, index) in list" :key="index">{{ item.name }}</li>
        </ul>
    </div>
</template>