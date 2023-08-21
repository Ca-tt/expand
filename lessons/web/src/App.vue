<script setup lang="ts">
import StudyUI from './StudyUI.vue';
import DeveloperUI from './components/DeveloperUI.vue';

import Lesson from './lessons/Lesson.vue';
import Solutions from './lessons/solutions/Solutions.vue';
import Examples from './lessons/examples/Examples.vue';

import { globalStyles } from '@/lessons/ui-config/globalStyles';


</script>

<template>
    <!-- toggle global styles -->
    <Transition>
        <StudyUI v-if="globalStyles.enabled" />

        <div class="no-styles" v-else>
            <Suspense>
                <Lesson />
            </Suspense>
            <Suspense>
                <Examples />
            </Suspense>
            <Suspense>
                <Solutions />
            </Suspense>
        </div>
    </Transition>

    <DeveloperUI />
</template>

<style lang="scss" scoped>
@import 'scss/base/reset.scss';
@import 'scss/helpers/all.scss';

.page-content {
    @extend .text-center;
}

.v-enter-active,
.v-leave-active {
    transition: .4s;
}

.v-enter-from,
.v-leave-to {
    opacity: 0;
}
</style>