<script setup>
import { ref } from 'vue'

// give each todo a unique id
let id = 0

const newTodo = ref('')

const todos = ref([
    { id: id++, text: 'Learn HTML' },
    { id: id++, text: 'Learn JavaScript' },
    { id: id++, text: 'Learn Vue' },
    { id: id++, text: 'Learn CSS' },
    { id: id++, text: 'Learn NodeJS' },
    { id: id++, text: 'Learn ReactJS' }
])

// create new object to push, rewrite text to new variable 
function addTodo() {
    let newText = newTodo.value;
    let newTodoObject = { id: id++, text: newText };
    todos.value.push(newTodoObject);
}

// remove todo by it's reference
function removeTodo(removeIndex) {
    todos.value = todos.value.filter((todo, index) => index != removeIndex);
}
</script>

<template>
    <form @submit.prevent="addTodo">
        <input v-model="newTodo">
        <button>Add Todo</button>
    </form>
    <ul>
        <li v-for="(todo, index) in todos" :key="todo.id">
            {{ todo.text }}
            <button @click="removeTodo(index)">X</button>
            {{ index }}
        </li>
    </ul>
</template>

<style scoped>

</style>