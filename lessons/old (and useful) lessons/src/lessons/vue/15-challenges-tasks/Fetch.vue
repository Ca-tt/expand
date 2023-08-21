<script lang="ts" setup>
import { ref, watch, reactive } from 'vue'

const todoId = ref(1)
let todoData = ref([])

async function fetchData() {
    const res = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${todoId.value}`
    )
    todoData.value.push(await res.json())
}

fetchData()
watch(todoId, fetchData)

</script>

<template lang="pug">
h1(ref="h1") Работа с API с помощью watchers

p Todo id: {{ todoId }}
button(@click="todoId++") Fetch next todo
p(v-if="!todoData") Loading...
pre(v-else) {{ todoData }}

</template>

<style lang="scss">

</style>