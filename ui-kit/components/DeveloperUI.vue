<script setup lang="ts">
import { NNotificationProvider } from 'naive-ui';

/* ui togglers */
import RefreshPageButton from './togglers/RefreshPageButton.vue';
import GlobalStylesSwitch from './togglers/GlobalStylesSwitch.vue';
import CustomConsoleLog from './togglers/CustomConsoleLog.vue';

/* config statuses */
import FullReloadStatus from './statuses/FullReloadStatus.vue';
import ErrorOverlayStatus from './statuses/ErrorOverlayStatus.vue';

</script>

<template>
    <section class="developer-overlay">
        <!-- upper section -->
        <header class="overlay at-top p-s">
            <Row columns-between>
                <Column></Column>
                <Column>
                    <!-- <ErrorCount /> -->
                    <!-- <CustomConsoleLog /> -->
                </Column>
            </Row>
        </header>

        <!-- bottom section -->
        <footer class="fixed at-bottom">
            <Row columns-between y-center>
                <!-- left column -->
                <Column w-auto flex y-center>
                    <ErrorOverlayStatus />
                    <FullReloadStatus />
                </Column>

                <!-- center column -->
                <Column w-auto>
                    <NNotificationProvider>
                        <CustomConsoleLog />
                    </NNotificationProvider>
                </Column>

                <!-- right column -->
                <Column w-auto flex y-center>
                    <GlobalStylesSwitch />
                    <RefreshPageButton />
                </Column>
            </Row>
        </footer>

    </section>
</template>

<style lang="scss" scoped>
@import 'scss/helpers/all.scss';

.at-bottom {
    @extend .at-bottom, , .between, .y-bottom, .p-s, .is-above-others;
}

</style>