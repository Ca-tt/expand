<script setup>
const englishLetters = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
];

let shiftedLetters = [
    'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M'
]

let phrase = 'I LOVE apples';

// "V YBIR NCCYRF"

function rot13(phrase) {
    let upperLetters = phrase.toUpperCase();
    console.log('upperLetters: ', upperLetters);

    let newString = ''

    for (const letter of upperLetters) {
        console.log('letter: ', letter);
        let index = englishLetters.indexOf(letter);
        console.log('index: ', index);

        if(index == -1) {
            newString += ' ';
        }
        else {
            newString += shiftedLetters[index];
        }
    }
    
    console.log('newString: ', newString);
    
}

rot13(phrase);

</script>

<template></template>

<style scoped></style>