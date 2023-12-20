<script setup lang='ts'>
const appConfig = useAppConfig();
console.log(appConfig);

</script>
<template>
    <h1>这是我的第一个页面{{ appConfig.title }}</h1>
</template>
