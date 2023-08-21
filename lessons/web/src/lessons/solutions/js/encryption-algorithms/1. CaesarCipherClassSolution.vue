   
<script setup>
import { NInput, NSlider } from 'naive-ui';
import { ref } from 'vue';

var EngAlf = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

let marks = ref({
    '-15': '-15',
    '-5': '-5',
    0: '0',
    5: '5',
    15: '15'
})

/* 

    Логика следующая:
        1. Перемещаем букву через индексы алфавита (0-25)
        
        2. Когда двигаем влево и переходим границу (например, -2), мы возвращаемся в конец массива и отнимает -2

        A B C D W X Y Z
        Z A B C D W X Y
        Z Y X A B C D W
        
        3. С правой границей логика та же, что и с левой

*/

let inputText = ref('New phrase')
let cypheredText = ref("")

let rangeValue = ref(0)

function cypher(text, shift) {
    text.value = text.value.replaceAll(' ', '').toUpperCase()  // Убираем пробелы, и превращаем весь текст в большие буквы
    for (let i = 0; i < text.value.length; i++) {
        let letter = text.value[i];
        let index = EngAlf.indexOf(letter);
        // console.log(letter, ioal);

        let newIndex = index + shift

        /* сдвиг влево */
        if (newIndex < 0) {
            newIndex = newIndex + 26
        }
        /* сдвиг вправо */
        else if (newIndex > 25) {
            newIndex = newIndex - 26
        }
        let newLetter = EngAlf[newIndex]

        cypheredText.value += newLetter

    }
    console.log(cypheredText.value);
}
// if index + shift = -number then -number + 25
// Если число ушло в -, то разницу между - и 0 значением мы отнимаем от конца(25 индекса). 


cypher(inputText, 8);




</script>

<template>
    <h1>Шифр Цезаря</h1>
    <h3>Введите текст для зашифровки:</h3>
    <NInput v-model:value="inputText" type="textarea" placeholder="Basic Input" />

    <h3>Зашифрованный текст</h3>
    <h3>{{ cypheredText }}</h3>

    <NSlider model:value="rangeValue" :step="1" :show-tooltip="true" :min="-15" :max="15"
                :marks="{ '-15': '-15', '-5': '-5', '0': '0', '5': '5', '15': '15' }" />

    <!-- <h3>Доска позора от чат GPT</h3>
    <p>izrj ozno klypzv</p> -->
</template>

<style scoped></style>