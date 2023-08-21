<script setup lang="ts">
import { computed } from 'vue'
import { propsToClasses } from '@/addons/custom-props/propsToClasses';

let props = defineProps({
    align: {
        type: String,
        default: ''
    }
})

let propsClasses = computed(() => propsToClasses(props));
</script>

<template>
    <div :class="['content', propsClasses]">
        <slot></slot>
    </div>

</template>

<style lang="scss" scoped>

</style>