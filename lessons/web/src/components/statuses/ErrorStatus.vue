<script setup lang="ts">
import { ref, onErrorCaptured } from 'vue';
import type { Ref } from 'vue';
import Warning from 'components/icons/Warning.vue';

import { globalConsoleErrors } from '@/components/developer-ui/error-handlers/errorHandler';

</script>

<template>
    <NTooltip trigger="hover" :delay="500">
        <template #trigger>


            <!-- icon with text -->
            <NButton icon-placement="left"
                :class="['is-hidden', 'is-row', 'columns-bottom', 'no-padding', 'no-hover-bg-i', 'gap-xs', 'has-short-transition', { 'is-visible': globalConsoleErrors.count.value }]"
                quaternary type="error">
                <template #icon>
                    <NIcon size="2rem" :component="Warning">
                    </NIcon>
                </template>

                <!-- text -->
                <Text regular-l-font-size base-color class="error-text">{{ globalConsoleErrors.count }}</Text>

            </NButton>
        </template>
        You have {{ globalConsoleErrors.count }} errors in console
    </NTooltip>
</template>

<style lang="scss" scoped>
@import 'scss/helpers/all.scss';

.error-text {
    margin: 0 0 -3px 0;
}
</style>