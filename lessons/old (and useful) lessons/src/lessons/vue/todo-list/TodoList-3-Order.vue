<script setup lang="ts">
import { computed, ref } from 'vue'

let id = 0

const newTodoText = ref('')
const hideCompleted = ref(null)

const todos = ref([
    { id: id++, text: 'Выучить VueJS 1', done: true },
    { id: id++, text: 'Покормить котов', done: false },
    { id: id++, text: 'Быть смелым по жизни 1', done: false },
    { id: id++, text: 'Заработать денег на котов', done: true },
    { id: id++, text: 'Выучить VueJS 2', done: true },
    { id: id++, text: 'Быть смелым по жизни 2', done: false },
])

function sortTodos() {
    function compareFunction(todo) {
        return +todo.done;
    }

    todos.value.sort(compareFunction);
}
sortTodos();

let filteredTodos = computed(() => {
    return todos.value.filter((todo) => todo.done != hideCompleted.value)
})

function addTodo() {
    let newTodo = { id: id++, text: newTodoText.value, done: false };
    todos.value.push(newTodo);

    sortTodos();
    newTodoText.value = ''
}

// найти, вырезать и вставить
function checkTodo(checkedTodo) {
    todos.value.map((todo, index) => {
        if (todo == checkedTodo) {
            todos.value.splice(index, 1);
            checkedTodo.done ? todos.value.push(todo) : todos.value.splice(0, 0, todo);
        }
    })
}

function removeTodo(todo) {
    todos.value = todos.value.filter((t) => t !== todo)
}
</script>

<template>
    <!-- button -->
    <form class="gap-x-s" @submit.prevent="addTodo">
        <input v-model="newTodoText">
        <button>Добавить задачу</button>
    </form>

    <!-- tasks -->
    <ul>
        <!-- <li v-for="todo in todos" :key="todo.id"> -->
        <li v-for="todo in (hideCompleted == null) ? todos : filteredTodos" :key="todo.id"
            @click="{ todo.done = !todo.done; checkTodo(todo) }">
            <input type="checkbox" @change="checkTodo(todo)" v-model="todo.done">
            <span :class="{ done: todo.done }">{{ todo.text }}</span>
            <button @click="removeTodo(todo)">X</button>
        </li>
    </ul>

    <!-- buttons -->
    <section class="buttons gap-x-s">
        <button @click="hideCompleted = !hideCompleted">
            {{ hideCompleted ? 'Показать сделанные задачи' : 'Показать только активные' }}
        </button>
        <button @click="hideCompleted = null">Все задачи</button>
    </section>
</template>

<style lang="scss">
ul {
    list-style: none;
    padding: 0 0 0 1rem;
}

li,
input,
button {
    cursor: pointer;
}

button {
    appearance: none;
    background-color: #fff;
    color: rgb(51, 46, 46);
    border: 0;
    box-shadow: 0 0 1px 1px black;
    border-radius: 5px;
    font-size: 1.1rem;
    font-family: 'Sofia Sans', sans-serif;
}

$input-size: 25px;

input[type="checkbox"] {
    width: $input-size;
    height: $input-size;
}

li {
    display: flex;
    column-gap: 5px;
    align-items: center;
    font-size: 1.2rem;
}

.done {
    text-decoration: line-through;
}

.buttons {
    display: flex;
    gap: 10px;
}

.flex {
    display: flex;
}

[class*="gap-"] {
    display: flex;
}

$base-column-gap: 1rem;

.gap-x {
    column-gap: $base-column-gap;

    &-s {
        column-gap: $base-column-gap * 0.5;
    }
}
</style>