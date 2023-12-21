<script setup lang='ts'>
import Link from "./NavbarMenu/Link.vue";
import Menu from "./NavbarMenu/Menu.vue";
</script>
<template>
    <header class="flex fixed backdrop-filter backdrop-blur-md top-0 z-40 w-full flex-none transition-colors duration-300 lg:z-50 border-b border-gray-950/10 dark:border-gray-50/[0.2] bg-white/[0.5] dark:bg-gray-950/[0.5] h-[64px] max-h-[64px]">
        <div class="flex-1 flex items-center justify-between max-w-screen-2xl mx-auto px-4">
            <div>
                <slot name="title">
                    <NuxtLink to="/" class="router-link-active router-link-exact-active font-bold text-lg text-primary-500">
                        <Icon name="simple-icons:nuxtdotjs" class="font-black text-xl font-mono mr-2 inline-block" />
                        <span>飞跃雪山</span>
                    </NuxtLink>
                </slot>
            </div>
            <div class="flex space-x-4 items-center divide-x divide-gray-500">
                <Menu />
                <Link />
            </div>
        </div>
    </header>
</template>
