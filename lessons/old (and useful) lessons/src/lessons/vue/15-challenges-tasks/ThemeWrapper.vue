<script setup lang="ts">
// import Examples from './components/Examples.vue';
// import { ref, onMounted } from 'vue';
// import DarkTheme from './lessons/15-challenges-tasks/DarkTheme.vue';
// import TodoList3 from './lessons/todo-list/TodoList-3-Order.vue'
import NodeClient from './lessons/node-client/NodeClient.vue'

// let app = ref(null);

// function changeTheme(theme) {
//   let appClasses = app.value.classList;
//   console.log('app.value: ', app.value);
//   console.log('appClasses: ', appClasses);
  
//   theme ? appClasses.add('dark') : app.value.classList.remove('dark') 
// }

</script>

<template lang="pug">
.app(ref="app")
  NodeClient
  //- TodoList3
  //- DarkTheme(@changeTheme="changeTheme")

</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Sofia+Sans&display=swap');

.app {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Sofia Sans', sans-serif;

  &.dark {
    background: #000;
    color: white;
  }
}

html {
  font-size: 16px;
}

h1 {
  font-size: 3em;
}
</style>
