<script setup lang="ts">
import { ref, watch, onMounted, onUpdated } from 'vue';
import { group } from './state';

defineProps({
    elementKey: Number,
    symbol: String,
    name: String,
    weight: Number,
    color: String
});


let cell = ref([]);

defineExpose({
    cell
})

function checkActiveGroup() {
    let activeGroup = group.isActive;

    let activeClassName = `group-${activeGroup}`

    if (activeGroup == 'all') {
        cell.value.classList.remove('disabled');
    }
    else if (!cell.value.classList.contains(activeClassName)) {
        cell.value.classList.add('disabled');
    }
    else {
        cell.value.classList.remove('disabled');
    }
}

watch(group, checkActiveGroup)


</script>

<template>
    <div tabindex="0" ref="cell" :class="['element', `group-${color}`]">
        <div class="element-key">{{ elementKey }}</div>
        <div class="simbol">{{ symbol }}</div>
        <div class="fullname">{{ name }}</div>
        <div class="weight">{{ weight }}</div>
    </div>
</template>

<style lang="scss" scoped>
@use './scss/colors.scss';

.element {
    width: 130px;
    // height: 100px;
    display: flex;
    padding: 5px;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    transition: all 0.5s ease;
    background: #000;
    font-family: Verdana;
    position: relative;
    perspective: 1000px;
    transform: translate(0, 0, 0);
    cursor: pointer;
    border: 1px solid white;

    .fullname {
        font-size: 0.90rem;
    }
}

@each $group,
$color in colors.$grouplist {
    .group-#{$group} {
        border: 2px solid $color;
        color: $color;
        text-shadow: $color 0px 0px 5px, $color 0px 0px 10px;
        color: $color;
    }
}



.simbol {
    font-size: 35px;
}

.element-key {
    position: absolute;
    left: 5px;
    top: 5px;
}

.element-key,
.weight {
    font-size: 0.7rem;
}


.element:hover {
    scale: 1.3;
    z-index: 2;
    opacity: 1;
    box-shadow: 0px 0px 15px 3px;
    text-shadow: 0px 0px 3px, 0px 0px 3px, 0px 0px 20px, 0px 0px 20px;
}

.element {
    opacity: 0.8;
}

.element.disabled {
    opacity: 0.2;
    pointer-events: none;
}

.scale {
    scale: 1.5 !important;
    opacity: 1 !important;
    z-index: 10;
}

$types: (
    'simbol':1.5,
    'fullname':0.6,
    'weight':0.5
);

@each $type,
$size in $types {
    .#{$type} {
        transition: all 0.5s;
    }

    .scale .#{$type} {
        font-size: $size+rem;
    }

    .scale .simbol {
        margin: 20px 0 0 0;
    }
}
</style>