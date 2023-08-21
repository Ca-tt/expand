<script setup lang="ts">
import { NSwitch } from 'naive-ui';
// import NSwitch from 'naive-ui';
import { globalStyles } from '@/lessons/ui-config/globalStyles';
import { loadFromStorage, saveToStorage } from '@/addons/storage/storage';

function toggleGlobalStyles() {
    globalStyles.enabled = !globalStyles.enabled;
    saveToStorage('is-global-styles-on', globalStyles.enabled);
}

</script>

<template>
    <NTooltip trigger="hover" :delay="500">
        <template #trigger>
            <NSwitch :default-value="globalStyles.enabled" size="large" @update:value="toggleGlobalStyles">
                <template #checked>
                    CSS on
                </template>
                <template #unchecked>
                    CSS off
                </template>
            </NSwitch>
        </template>
        Global Styles
    </NTooltip>
</template>

<style lang="scss" scoped></style>