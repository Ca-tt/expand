<script setup lang="ts">

defineProps({
    text: String,
    group: String,
})

</script>

<template>
    <li tabindex="0" :class="['tab', `group-${group}`]">{{ text }}</li>
</template>

<style lang="scss" scoped>
@use './scss/colors.scss';

@each $group,
$color in colors.$grouplist {
    .group-#{$group} {
        color: $color;
        text-shadow: $color 0px 0px 5px, $color 0px 0px 10px;
    }
}
</style>