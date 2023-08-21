<script setup lang="ts">
import { ref } from 'vue';

import ErrorOverlayIcon from 'components/icons/ErrorOverlayIcon.vue';

import { viteConfigs } from '@/lessons/ui-config/vite-configs';

let iconType = ref(viteConfigs.isErrorOverlayEnebled ? 'success' : 'error');
let tooltipText = ref(viteConfigs.isErrorOverlayEnebled ? 'enabled' : 'disabled')

</script>

<template>
    <NTooltip trigger="hover" :delay="400">
        <template #trigger>
            <Row no-padding m-0>
                <NButton disabled quaternary circle :type="iconType">
                    <NIcon size="2rem">
                        <ErrorOverlayIcon />
                    </NIcon>
                </NButton>
            </Row>
        </template>
        Error widget {{ tooltipText }}
    </NTooltip>
</template>

<style lang="scss" scoped></style>