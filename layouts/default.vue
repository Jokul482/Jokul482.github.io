<script setup lang="ts">
</script>
<template>
    <div class="min-h-screen flex flex-col">
        <header class="py-5 bg-slate-800">
            <div class="flex-1 flex items-center justify-between max-w-5xl mx-auto">
                <div>
                    <slot name="title">
                        <NuxtLink to="/"
                            class="router-link-active router-link-exact-active font-bold text-lg">
                            <span class="text-primary">Blog</span>
                        </NuxtLink>
                    </slot>
                </div>
                <div class="flex space-x-4 items-center divide-x divide-gray-500">
                    <Navbar />
                </div>
            </div>
        </header>
        <main class="container max-w-5xl mx-auto text-zinc-600">
            <slot />
        </main>
    </div>
</template>  