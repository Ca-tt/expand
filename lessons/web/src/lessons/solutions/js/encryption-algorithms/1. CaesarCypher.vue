<script setup lang="ts">
import { ref, computed, onMounted, watch } from 'vue';
import { NInput, NSlider, NSpace, NInputNumber } from 'naive-ui';

const letters: string[] = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];


/* 
    Класс Letter создаёт 4 шага обработки буквы, чтобы найти новую, сдвинутую:

    1. Находит позицию буквы в таблице Unicode 
        - метод getLetterCode()
        - функция charCodeAt(0))
    2. Определяет границы для буквы
        - метод getLetterType()
        - на основе 65 и 90 находим Uppercase-буквы, другие буквы - lowercase
        - метод getRangeLimits() выставляем лимиты (65-90 или 97-122)
    3. Находим новый индекс для уже сдвинутой буквы
        - метод shiftLetter() 
        - в нём главное - правильно сделать переход через границу влево и вправо. 
    4. Последний этап: найти букву по индексу
        - метод getNewLetter()
        - в частности String.fromCharCode(index)
*/

class Letter {
    /* текущее значение буквы и её будущее */
    value: string;
    code: number;
    type: string;
    lowerLimit: number;
    upperLimit: number;
    shiftValue: number;
    newIndex: number;
    newLetter: string;

    constructor(value: string, shiftValue: number) {
        this.value = value;
        this.shiftValue = shiftValue;

        this.code = this.getLetterCode();
        this.type = this.getLetterType();
        [this.lowerLimit, this.upperLimit] = this.getRangeLimits();

        this.newIndex = this.shiftLetter();
        this.newLetter = this.getNewLetter();
    }

    // перебирает буквы, возвращаем их unicode
    getLetterCode() {
        return this.value.charCodeAt(0);
    }

    /* определяем диапазон букв, исходя из позиции в таблице unicode (большие / маленькие) */
    getLetterType() {
        return this.code >= 65 && this.code <= 90 ? 'uppercase' : 'lowercase';
    }

    /* определяем лимиты для буквы для дальнейшего свдига */
    getRangeLimits() {
        /* letter range limits */
        const uppercaseLowerLimit = 65;
        const uppercaseUpperLimit = 90;
        const lowercaseLowerLimit = 97;
        const lowercaseUpperLimit = 122;

        let limitStart = lowercaseLowerLimit;
        let limitEnd = lowercaseUpperLimit;

        if (this.type == 'uppercase') {
            limitStart = uppercaseLowerLimit;
            limitEnd = uppercaseUpperLimit;
        }

        return [limitStart, limitEnd];
    }

    shiftLetter() {
        this.newIndex = 0;

        // сдвиг влево
        if (this.shiftValue < 0) {

            // остаток шагов до границы
            let stepsToLimit = this.code - this.lowerLimit;

            // если пересекаем границу
            if (this.code + this.shiftValue < this.lowerLimit) {

                // считаем остаток после перехода
                let stepsLeft = Math.abs(this.shiftValue + stepsToLimit);

                // всем у кого stepsToLimit == 0 делаем +1 после перехода для постановки на букву после границы
                if (stepsToLimit == 0) {
                    this.shiftValue += 1;
                }

                // те, кто дошёл до границы, но не перешагнул её, там и остаются
                if (stepsLeft == 1) {
                    this.newIndex = this.upperLimit;
                }

                // все остальные пойдут себе дальше 
                else {
                    this.newIndex = this.upperLimit - stepsLeft + 1;
                }

            }

            // для тех, кто не пересекает границу, всё кудааааа проще
            else {
                this.newIndex = this.code + this.shiftValue;
            }
        }

        // когда смещаем букву вправо, делаем точно такие же манипуляции (смотри алгоритм сдвига влево)
        else {

            // шагов до границы
            let stepsToLimit = this.upperLimit - this.code;


            // когда пересекаем границу
            if (this.code + this.shiftValue > this.upperLimit) {

                // посчитать остаток после перехода
                let stepsLeft = this.shiftValue - stepsToLimit;

                // те, кто стал на границе, там и остаются
                if (stepsLeft == 0) {
                    this.newIndex = this.upperLimit;
                }

                // все остальные пойдут себе дальше 
                else {
                    this.newIndex = this.lowerLimit + stepsLeft - 1;
                }

            }
            // для тех, кто не пересекает границу
            else {
                this.newIndex = this.code + this.shiftValue;
            }

        }

        return this.newIndex;
    }

    getNewLetter() {
        return String.fromCharCode(this.newIndex);
    }
}

/* 
    Класс useCaezarCypher

    1. Берём нашу фразу - phrase (наш текст, дефолтный - "Damir")

    2. Берём, на сколько нужно сдвинуть буквы - shiftValue  
    
    3. Делит фразу на буквы методом splitPhrase(), в частности формирует массив Array.from(phrase)

    4. После разбиения на буквы метод getEncryptedPhrase() перебирает массив букв и для каждой вызывает класс Letter, который для каждой буквы возвращает её новый, сдвинутый аналог


*/

class useCaezarCypher {
    phrase: string;
    shiftValue: number;
    letters: string[];
    encryptedPhrase: string;

    constructor(phrase: string = 'Damir', shiftValue: number = 5) {
        this.phrase = phrase;
        this.shiftValue = shiftValue;
        this.letters = this.splitPhrase();
        this.encryptedPhrase = this.getEncryptedPhrase();
    }

    splitPhrase() {
        return Array.from(this.phrase);
    }

    getEncryptedPhrase() {
        this.encryptedPhrase = '';

        this.letters.map((letterValue: string, index: number) => {
            let letter = new Letter(letterValue, this.shiftValue);
            // console.log('letter: ', letter);

            this.encryptedPhrase += letter.getNewLetter();

        })

        return this.encryptedPhrase;
    }
}

/* 
    Оставшиеся манипуляции - это:

    1. Начальная фраза, text
    2. Свдиг, rangeValue, изначально 0
    
    3. Зашифрованный результат, encryptedResult, который получаем в следствии вызова класса useCaezarCypher() - начальное значение
    
    4. Далее мы следим за ползунком rangeValue через watch, а также следим за текстом text и вызываем метод encryptData()

    5. Чтобы добиться реактивности, начальное значение приходится заготавливать, а потом обновлять его через value при вызове функции encryptData() 

    Вот така ху*ня, малята
*/

let text = ref('Teachers are also a human');
let rangeValue = ref(0);
let encryptedResult = ref(new useCaezarCypher(text.value, rangeValue.value).encryptedPhrase);

function encryptData() {
    encryptedResult.value = new useCaezarCypher(text.value, rangeValue.value).encryptedPhrase;
}

watch(rangeValue, () => {
    encryptData();
})

watch(text, () => {
    encryptData();
})

</script>

<template>
    <div class="w-100">

        <NSpace vertical :size="20">
            <h1>Шифр Цезаря</h1>
            <h3>Введи текст для зашифровки</h3>

            <NInput class="range" v-model:value="text" type="text" placeholder="Basic Input" />

            <h3>Выбери размах сдвига</h3>
            <n-slider v-model:value="rangeValue" :step="1" :show-tooltip="true" :min="-15" :max="15"
                :marks="{ '-15': '-15', '-5': '-5', '0': '0', '5': '5', '15': '15' }" />

            <h3>Зашифрованный текст: {{ encryptedResult }}</h3>
        </NSpace>
    </div>
</template>

<style lang="scss" scoped>
/* increase input font size */
.range {
    font-size: 1rem;
    margin-bottom: 1rem;
}
</style>