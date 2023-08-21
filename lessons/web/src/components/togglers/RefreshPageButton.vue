<script setup lang="ts">
import RefreshPage from 'components/icons/RefreshPage.vue';
import { reloadPage } from '@/addons/global/helpers/reloadPage';

</script>

<template>
    <NTooltip trigger="hover" :delay="500">
        <template #trigger>
            <NButton class="no-hover-bg-i" quaternary @click="reloadPage">
                <template #icon>
                    <NIcon size="2rem" :component="RefreshPage">
                    </NIcon>
                </template>
            </NButton>
        </template>
        Refresh Page
    </NTooltip>
</template>

<style lang="scss">
@import 'scss/variables/colors.scss';
@import 'scss/helpers/hover.scss';

.refresh-page {
    transition: .5s;

    &:hover {
        color: $naive-green;
        transform: rotate(-90deg);
    }
}
</style>