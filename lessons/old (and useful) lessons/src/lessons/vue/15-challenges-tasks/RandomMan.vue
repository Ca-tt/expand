<script setup>
import { ref } from 'vue'

let id = 0;

let users = ref([
    {
        id: id++,
        name: 'Oleg',
        hasChildren: true,
    },
    {
        id: id++,
        name: 'Rachmat',
        hasChildren: false,
    },
    {
        id: id++,
        name: 'Damir',
        hasChildren: 'sometimes',
    },
]);

function addNewMan() {
    users.value.push(
        {
            id: id++,
            name: 'Мужичок #' + Math.round(Math.random() * 100),
            hasChildren: Math.random() > 0.5 ? true : false,
        }
    )
}

</script>

<template>
    <h2>Генератор рандомного мужичка</h2>
    <button @click="addNewMan">Добавить ещё одного мужичка</button>
    <!-- Вывод пользователей -->
    <ul>
        <li v-for="user in users" :key="user.id">{{ user.name }}
            <ul>
                <li>hasChildren: {{ user.hasChildren }}</li>
            </ul>
        </li>
    </ul>
</template>

<style lang="scss" scoped>
ul li {
    font-size: 1.4rem;

    ul li {
        color: rgb(173, 120, 21);
        line-height: 1.6;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }
    }
}
</style>