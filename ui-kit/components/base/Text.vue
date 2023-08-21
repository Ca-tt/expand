<script setup lang="ts">
import { computed } from 'vue'
import { customProps } from '@/addons/custom-props/customProps';
import { propsToClasses } from '@/addons/custom-props/propsToClasses';

let props = defineProps({
    ...customProps
})

let propsClasses = computed(() => propsToClasses(props));


</script>

<template>
    <span :class="['text', propsClasses]">
        <slot></slot>
    </span>
</template>

<style lang="scss" scoped>
.text {
    display: inline-block;
}
</style>