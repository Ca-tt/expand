<script setup lang="ts">
/* 
    Склад: 
    - с айфонами
    - и макбуками
*/
let store = {
    iPhonesMaxCapacity: 25,
    macBooksMaxCapacity: 5,

    iPhonesInWarehouse: 20,
    macBooksInWarehouse: 3,
}

/* 
    Продавец 
    - знаем имя продавца
    - сколько на руках айфонов и макбуков
*/
let seller = {
    name: 'Cho Gung',
    iPhonesNumber: 3,
    macBooksNumber: 7,
}

/* проверяем, есть ли на складе место */
function checkCellsAvailability(bookedInWarehouse, supplyToCome, maxCapacity, productName) {

    /* проверяем, нужно ли нам сделать заказ и как много нужно заказать */
    let canWeTakeYourOrder = (bookedInWarehouse + supplyToCome) < maxCapacity;
    let howMuchWeCanTake = maxCapacity - (bookedInWarehouse + supplyToCome);

    console.log('can take or not?', canWeTakeYourOrder);

    
    /* если нужно сделать заказ, формируем ответ для продавца */
    let supplierResponse;

    if(canWeTakeYourOrder) {
        supplierResponse =
            `
                Now, we can proceed.
                We have ${ howMuchWeCanTake } cells for your ${ productName } in our warehouse.
                Let us know if you have any other questions.
            `
    }
    else {
        supplierResponse = `
        Unfortunately, we can't proceed further.
        There's no place in our warehouse for you ${ productName }.
        `
    }

    console.log(supplierResponse);
    return supplierResponse;
}

/* ответ продавцу */
function replyToSupplier(supplierName = seller.name) {

    let newLetter = `
        Dear ${ supplierName }, \n
        Today we keep on our warehouse ${ store.iPhonesInWarehouse} iPhones \n
        and ${ store.macBooksInWarehouse } macBooks. \n
    `
    + checkCellsAvailability(
        store.iPhonesInWarehouse,
        seller.iPhonesNumber,
        store.iPhonesMaxCapacity,
        'iPhone'
    )
    + checkCellsAvailability(
        store.macBooksInWarehouse,
        seller.macBooksNumber,
        store.macBooksMaxCapacity,
        'macBook'
    );

    console.log(newLetter);
    return newLetter;
}

replyToSupplier();


</script>

<template>

</template>

<style lang="scss" scoped>

</style>