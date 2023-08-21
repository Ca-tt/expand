<script setup lang="ts">
import { ref } from 'vue';

let users = ref([]);
let serverURL = 'http://localhost:3000/';

async function loadUsers() {
    let request = await fetch(serverURL);
    console.log('request: ', request); // на руках объект Response

    users.value = await request.json();
}

fetch(serverURL)

</script>

<template>
    <h1>Vue Client for NodeJS</h1>
    <button @click="loadUsers">Load Users</button>

    <ul>
        <li v-for="user in users">{{ user }}</li>
    </ul>

</template>

<style lang="scss" scoped>

</style>