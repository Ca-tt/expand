<script setup lang="ts">

console.log('I am a main Javascript thread');

let worker = new Worker('./src/study/examples/js/workers/worker.js');
console.log('worker: ', worker);

let tasks = [
    { id: 0, message: 'Спиши домашку из ГДЗ' },
    { id: 1, message: 'Свари похавать' },
    { id: 2, message: 'Укради у Дамира все решения задач' },
]

worker.postMessage(tasks)

/* Задачи после воркера */
worker.onmessage = (event) => {
    console.log('задачи после воркера: ', event.data);
}


</script>

<template></template>

<style scoped></style>