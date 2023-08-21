<script setup>
import { onMounted, ref } from 'vue';

let cardsData = ref(null);
let cardsCount = 2;
const additionalCards = 2;

async function getNewCards(dataCount) {
    let response = await fetch(`http://localhost:3000/${dataCount}`)
    cardsData.value = await response.json();
}

/* init first 2 cards */
await getNewCards(cardsCount);

/* 
    Задумка: 
    1) При скролле 
    2) до последнего элемента
    3) Находить его локацию
    4) И догружать внизу ещё два блока

*/


onMounted(() => {

    /* getting last card top & height */
    let lastCard = ref();
    let lastCardTop = ref(0);
    let card = document.querySelector('.card');
    const cardHeight = card.getBoundingClientRect().height;
    
    /* first end for data loading */
    findCardsEnd();
    
    /* reuse last card top & height */
    function findCardsEnd() {
        let cards = document.querySelectorAll('.card');

        lastCard.value = cards[cards.length - 1];
        lastCardTop.value = cards[cards.length - 1].getBoundingClientRect().top;
    }

    /* 
        remove scroll event after data loading 
        load new cards, find new page end 
        and add data

    */

    async function removeScrollFunction() {
        console.log('window scroll actions disabled');
        window.onscroll = null;

        cardsCount += additionalCards;
        await getNewCards(cardsCount);

        findCardsEnd();
        enableScrollFunction();
    }

    function enableScrollFunction() {
        console.log('window scroll actions enabled');
        window.onscroll = scrollActions;
    }

    async function scrollActions() {
        let windowScroll = window.scrollY;
        console.log('windowScroll: ', windowScroll);

        // all cards - 1 for mobile viewport
        let cardsHeight = cardsCount * cardHeight - cardHeight;

        if (windowScroll >= cardsHeight) {
            removeScrollFunction();
        }
    }

    enableScrollFunction();
});

</script>

<template>
    <div class="card product-card" v-for="object in cardsData" :key="object.id">
        <div class="badge">Hot</div>
        <div class="product-tumb">
            <img :src="object.image" alt="">
        </div>
        <div class="product-details">
            <span class="product-catagory">Women,bag</span>
            <h4><a href="#">{{ object.title }}</a></h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero, possimus nostrum!</p>
            <div class="product-bottom-details">
                <div class="product-price">{{ object.price }}$</div>
                <div class="product-links">
                    <a href=""><i class="fa fa-heart"></i></a>
                    <a href=""><i class="fa fa-shopping-cart"></i></a>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Roboto:400,500,700');

* {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

a {
    text-decoration: none;
}

.product-card {
    width: 380px;
    position: relative;
    box-shadow: 0 2px 7px #dfdfdf;
    margin: 50px auto;
    background: #fafafa;
}

.badge {
    position: absolute;
    left: 0;
    top: 20px;
    text-transform: uppercase;
    font-size: 13px;
    font-weight: 700;
    background: red;
    color: #fff;
    padding: 3px 10px;
}

.product-tumb {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 300px;
    padding: 50px;
    background: #f0f0f0;
}

.product-tumb img {
    max-width: 100%;
    max-height: 100%;
}

.product-details {
    padding: 30px;
}

.product-catagory {
    display: block;
    font-size: 12px;
    font-weight: 700;
    text-transform: uppercase;
    color: #ccc;
    margin-bottom: 18px;
}

.product-details h4 a {
    font-weight: 500;
    display: block;
    margin-bottom: 18px;
    text-transform: uppercase;
    color: #363636;
    text-decoration: none;
    transition: 0.3s;
}

.product-details h4 a:hover {
    color: #fbb72c;
}

.product-details p {
    font-size: 15px;
    line-height: 22px;
    margin-bottom: 18px;
    color: #999;
}

.product-bottom-details {
    overflow: hidden;
    border-top: 1px solid #eee;
    padding-top: 20px;
}

.product-bottom-details div {
    float: left;
    width: 50%;
}

.product-price {
    font-size: 18px;
    color: #fbb72c;
    font-weight: 600;
}

.product-price small {
    font-size: 80%;
    font-weight: 400;
    text-decoration: line-through;
    display: inline-block;
    margin-right: 5px;
}

.product-links {
    text-align: right;
}

.product-links a {
    display: inline-block;
    margin-left: 5px;
    color: #e1e1e1;
    transition: 0.3s;
    font-size: 17px;
}

.product-links a:hover {
    color: #fbb72c;
}
</style>