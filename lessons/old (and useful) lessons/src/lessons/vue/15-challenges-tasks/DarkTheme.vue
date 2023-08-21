<script lang="ts" setup>
import { ref } from 'vue';

let darkTheme = ref(false);
let sectionClass = ref('light');

const emit = defineEmits(['changeTheme']);

function toggle() {
    darkTheme.value = !darkTheme.value;
    darkTheme.value ? sectionClass.value = 'dark' : sectionClass.value = 'light'  
    emit('changeTheme', darkTheme.value);
}

</script>

<template>
    <button @click="toggle">Change darkTheme</button>
    <section :class="sectionClass">
        <p>we use {{ darkTheme? 'dark': 'light' }} theme</p>
        <p>we use {{ darkTheme? 'dark': 'light' }} theme</p>
        <p>we use {{ darkTheme? 'dark': 'light' }} theme</p>
        <p>we use {{ darkTheme? 'dark': 'light' }} theme</p>
        <p>we use {{ darkTheme? 'dark': 'light' }} theme</p>
    </section>
</template>

<style scoped>
.light {
    background: white;
    color: black;
}

.dark {
    background: black;
    color: white;
}
</style>