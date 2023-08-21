<script setup>
defineProps({
    size: 'String',
    theme: 'String',
    margin: 'String'
});
</script>

<template>
    <button :class="[size, theme]" :style="{ margin: margin }">
        <slot>Дефолтный текст</slot>
    </button>
</template>

<style scoped>
button {
    border: 0;
}
.red {
    background: red;
    color: white;
}

.big {
    font-size: 3rem;
}
</style>