<script setup lang="ts">
import { computed, ref } from 'vue'

let id = 0

const newTodo = ref('')

const hideCompleted = ref(false)

const todos = ref([
    { id: id++, text: 'Learn HTML', done: true },
    { id: id++, text: 'Learn JavaScript', done: true },
    { id: id++, text: 'Learn Vue', done: false },
    { id: id++, text: 'Learn Vue', done: false }
])

// прячем элементы, у который статус done
// когда статус кнопки hideCompleted = true
// если статус меняется, меняем и условие
let filteredTodos = computed(() => {
    return todos.value.filter((todo) => todo.done != hideCompleted.value)
})

// решение разработчиков: show all + hide completed 
// на основе переключателя
// const filteredTodos = computed(() => {
//   return hideCompleted.value
//     ? todos.value.filter((t) => !t.done)
//     : todos.value
// })

function addTodo() {
    todos.value.push({ id: id++, text: newTodo.value, done: false })
    newTodo.value = ''
}

function removeTodo(todo) {
    todos.value = todos.value.filter((t) => t !== todo)
}
</script>

<template>
    <!-- button -->
    <form @submit.prevent="addTodo">
        <input v-model="newTodo">
        <button>Add Todo</button>
    </form>

    <!-- tasks -->
    <ul>
        <!-- <li v-for="todo in todos" :key="todo.id"> -->
        <li v-for="todo in filteredTodos" :key="todo.id">
            <input type="checkbox" v-model="todo.done">
            <span :class="{ done: todo.done }">{{ todo.text }}</span>
            <button @click="removeTodo(todo)">X</button>
        </li>
    </ul>

    <!-- buttons -->
    <section class="buttons">
        <button @click="hideCompleted = !hideCompleted">
            {{ hideCompleted? 'Show completed': 'Show active tasks' }}
        </button>
        <button @click="hideCompleted = null">Show all tasks</button>
    </section>

</template>

<style lang="scss">
.done {
    text-decoration: line-through;
}

.buttons {
    display: flex;
    gap: 10px;
}
</style>