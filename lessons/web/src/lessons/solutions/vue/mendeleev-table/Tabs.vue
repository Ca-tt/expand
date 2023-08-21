<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { group } from './state';

import Tab from './Tab.vue';


let tabsData = [
    { title: "Alkali Metals", group: "orange" },
    { title: "Alkaline Earth Metals", group: "yellow" },
    { title: "Lanthanoids", group: "purple" },
    { title: "Actinides", group: "violet" },
    { title: "Transition Metals", group: "red" },
    { title: "Post-Transition Metals", group: "light-blue" },
    { title: "Metalloids", group: "turquoise" },
    { title: "Other Nonmetals", group: "green" },
    { title: "Noble Gases", group: "blue" },
    { title: "All", group: "all" },
]

function setActiveGroup(groupName: string): void {
    group.isActive = groupName;
}

function removeActiveGroup(event: FocusEvent, groupName: string) {
    let nextClickedElement = event.relatedTarget;

    if (nextClickedElement == null) {
        setTimeout(() => {
            setActiveGroup('all')
        }, 200);
    }
    else {
        group.isActive = groupName;
    }

}

</script>

<template>
    <nav class="tabs navbar center wrap">
        <Tab @blur="removeActiveGroup($event, tab.group)" @click="setActiveGroup(tab.group)" v-for="tab in tabsData" :text="tab.title"
            :group="tab.group" />
    </nav>
</template>

<style lang="scss" scoped>
.navbar {
    list-style-type: none;

    li {
        font-family: 'Segoe UI';
        padding: 20px;
        transition: all 0.2s ease;
        cursor: pointer;
    }

    :hover {
        text-shadow: 0px 0px 5px, 0px 0px 5px;
        scale: 1.1;
    }
}
</style>