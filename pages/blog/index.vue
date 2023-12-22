<script setup lang='ts'>
const { blog } = useAppConfig();
const author = blog.author;
</script>
<template>
    <ul class="pt-2 mb-6">
        <li class="hover:no-underline p-6 flex space-x-6 rounded border-b-2 border-b-slate-100 mb-4">
            <div class="mt-1 text-gray-600 text-right">
                <div>2022-06-29</div>
                <NuxtLink :to="author.links.github" class="text-sm">
                    <span>{{ author.name }}</span>
                </NuxtLink>
            </div>
            <div class="flex flex-col">
                <div class="text-2xl font-semibold text-gray-800">
                    <NuxtLink to="/">Hello world</NuxtLink>
                </div>
                <div class="text-gray-700 mt-2">Hello !!!, this is a post about hello world hand demo Syntax Highlight Code.</div>
            </div>
        </li>
    </ul>
</template>