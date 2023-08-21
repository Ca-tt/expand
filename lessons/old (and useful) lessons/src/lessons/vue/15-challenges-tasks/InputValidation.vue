<script setup>
import { ref } from 'vue';

let inputValue = ref('');
let numberRegEx = /\d+/g;
let validationMessage = ref('');

function inputValidation(e) {
    let input = e.target;
    let validationResult = inputValue.value.match(numberRegEx);

    let errorClass = 'has-error';
    let errorMessage = 'Ну я же просил без чисел!';

    console.log('validationResult: ', validationResult);

    if(validationResult) {
        input.classList.add(errorClass)
        validationMessage = errorMessage;
    }
    else {
        input.classList.remove(errorClass)
        validationMessage = '';
    }
}


</script>

<template>
    <h3>Инпут без чисел</h3>
    <input v-model="inputValue" @input="inputValidation" placeholder="Онли намберс, please">
    <p>Мы ввели в input: {{ inputValue }}</p>
    <p class="error error-message">{{ validationMessage }}</p>
</template>

<style scoped>
input {
    padding: .3em .5em;
}
.has-error {
    border: 2px solid rgb(183, 67, 67);
    outline: 0;
}

.error {
    color: red;
}
</style>