<script setup lang="ts">
import { ref } from 'vue'

/* Object */
interface Template {
  id: number;
  name: string;
}

let template: Template = {
    id: 23,
    name: 'template',
}

// console.log('template: ', template)

function log(text: 'Vania' | 'Damir' | string): void {
    console.log(text);
}
log('godlike');

type StringOrNumber = string | number;


</script>

<template>
<h1>TypeScript Test</h1>

</template>

<style lang="scss" scoped>

</style>