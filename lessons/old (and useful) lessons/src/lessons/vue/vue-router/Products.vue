<script setup lang="ts">

let products = [
    { id: 0, title: 'Product 1', price: 21 },
    { id: 1, title: 'Product 2', price: 22 },
    { id: 2, title: 'Product 3', price: 23 },
    { id: 3, title: 'Product 4', price: 24 },
]

</script>

<template>
<ul>
    <li v-for="product in products"> {{ product.title }} </li>
</ul>
</template>

<style lang="scss" scoped>

</style>