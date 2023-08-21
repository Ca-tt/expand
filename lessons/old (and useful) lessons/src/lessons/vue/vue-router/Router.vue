<script setup lang="ts">

</script>

<template>
    <h1>Vue Router</h1>
    <RouterLink to="/">Home</RouterLink> | 
    <RouterLink to="/products">Products page</RouterLink> | 
    <RouterLink to="/users">Users page</RouterLink>

    <RouterView></RouterView>
</template>

<style lang="scss" scoped></style>