<script setup lang="ts">

</script>

<template lang="pug">
.container
    slot
</template>


<style lang="scss" scoped>
.container {
    padding: 1em;
}

@media screen and (min-width: 768px) {
    .container {
        margin: 0 auto;
        padding: 1rem;
        max-width: 80%;

        &.is-wide {
            max-width: 90%;
        }

        &.is-narrow {
            max-width: 70%;
        }
    }
}
</style>