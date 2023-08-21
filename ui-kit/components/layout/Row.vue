<script setup lang="ts">
import { computed } from 'vue'
import { propsToClasses } from '@/addons/custom-props/propsToClasses';
import { customProps } from '@/addons/custom-props//customProps';

let props = defineProps({
    ...customProps
})

let propsClasses = computed(() => propsToClasses(props));
</script>

<template>
    <section :class="['row', propsClasses]">
        <slot></slot>
    </section>
</template>

<style lang="scss" scoped>
@import 'scss/helpers/flex.scss';
@import 'scss/helpers/flex.scss';
</style>