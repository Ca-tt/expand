<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { elementsData } from './js/elements.js';

import Cell from './Cell.vue'

let cells = ref([])

function scale(event: Event) {
    let currentElement = event.target;
    let parentElement = event.target.parentElement;

    if (currentElement.classList.contains('element')) {
        currentElement.classList.add('scale');
    }
    else {
        parentElement.classList.add('scale');
    }

}

function removeFocus() {
    cells.value.map(cell => {
        cell.cell.classList.remove('scale');
    })
}

</script>

<template>
    <div class="table-elements center wrap">
        <Cell @blur=removeFocus($event) @click="scale($event)" ref="cells" v-for="cell in elementsData"
            :elementKey="cell.number" :weight="cell.weight" :name="cell.name" :symbol="cell.symbol" :color="cell.group"
            :key="cell" />
    </div>
</template>

<style lang="scss" scoped>
.table-elements {
    gap: 10px;
    padding: 50px;
    color: white;
}
</style>