<script setup lang="ts">
import { computed } from 'vue'
import { propsToClasses } from '@/addons/custom-props/propsToClasses';

let props = defineProps({
    size: {
        type: String,
        default: ''
    },
})

let propsClasses = computed(() => propsToClasses(props));
</script>

<template>
    <div :class="['title', propsClasses]">
        <slot></slot>
    </div>
</template>


<style lang="scss" scoped>
@import 'scss/base/fonts.scss';
</style>