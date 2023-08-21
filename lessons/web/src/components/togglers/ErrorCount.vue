<script setup lang="ts">
import Warning from 'components/icons/Warning.vue';
// import { ConsoleErrorsData } from 'components/developer-ui/error-handlers/errorHandler';

</script>

<template>
    <NTooltip trigger="hover" :delay="500">
        <template #trigger>

            <!-- { 'is-visible': ConsoleErrorsData.count.value } -->
            <!-- icon with text -->
            <NButton icon-placement="left"
                :class="['is-hidden', 'is-row', 'columns-bottom', 'no-padding', 'no-hover-bg-i', 'gap-xs', 'has-short-transition',]"
                quaternary type="error">
                <template #icon>
                    <NIcon size="2rem" :component="Warning">
                    </NIcon>
                </template>

                <!-- text -->
                <!-- <Text regular-l-font-size base-color class="error-text">{{ ConsoleErrorsData.count }}</Text> -->

            </NButton>
        </template>
        You have {{ ConsoleErrorsData.count }} errors in console
    </NTooltip>
</template>

<style lang="scss" scoped>
@import 'scss/helpers/all.scss';

.error-text {
    margin: 0 0 -3px 0;
}
</style>