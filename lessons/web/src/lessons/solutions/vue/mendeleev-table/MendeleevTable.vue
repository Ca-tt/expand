<script setup lang="ts">
import { ref, reactive, onMounted } from 'vue';

import Tabs from './Tabs.vue';
import Cells from './Cells.vue';

let elementsQuery = reactive({})

onMounted(() => {
    elementsQuery = Array.from(document.querySelectorAll('.element'));
})


function receiveData(elements) {
    // elements.value = elements;
    // console.log('elements.value inside function: ', elements.value);
    
    return elements;
}



</script>

<template>
    <section class="dark-bg">
        <Tabs />
        <Cells @elements="receiveData" />
    </section>
</template>

<style lang="scss" scoped>
@use './scss/helper.scss';

.dark-bg {
    background: black;
}
</style>