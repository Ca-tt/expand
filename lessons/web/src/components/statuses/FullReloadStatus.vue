<script setup lang="ts">
import { ref } from 'vue';

import ReloadOn from 'components/icons/ReloadOn.vue';

import { viteConfigs } from '@/lessons/ui-config/vite-configs';

let iconType = ref(viteConfigs.isFullReloadEnabled ? 'success' : 'error');
let tooltipText = ref(viteConfigs.isFullReloadEnabled ? 'on' : 'off')

</script>

<template>
    <NTooltip trigger="hover" :delay="400">
        <template #trigger>
            <Row>
                <NButton disabled quaternary circle :type="iconType">
                    <NIcon size="2rem">
                        <ReloadOn />
                    </NIcon>
                </NButton>
            </Row>
        </template>
        Full page reload is {{ tooltipText }}
    </NTooltip>
</template>

<style lang="scss" scoped></style>