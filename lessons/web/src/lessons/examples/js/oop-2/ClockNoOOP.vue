<script setup lang="ts">
import { onMounted } from 'vue';

onMounted(() => {

    function addZero(time) {
        return (time < 10) ? time = "0" + time : time;
    }

    let divHours = document.querySelector(".hours")
    let divMinutes = document.querySelector(".minutes")
    let divSeconds = document.querySelector(".seconds")

    let arrowHours = document.querySelector(".arrow.small")
    let arrowSeconds = document.querySelector(".arrow.big")
    let arrowMinutes = document.querySelector(".arrow.medium")

    // for arrows
    const blockRotation = 90;

    function setDate() {
        let now = new Date();

        let seconds = now.getSeconds();
        let minutes = now.getMinutes();
        let hours = now.getHours();

        hours = addZero(hours);
        minutes = addZero(minutes);
        seconds = addZero(seconds);

        divHours.innerText = hours;
        divMinutes.innerText = minutes;
        divSeconds.innerText = seconds;

        // set arrows rotate angle

        /* Hours: each hours of 12 = 30deg
            360 / 12 = 30 (multiply hours by 30)
            + add minutes (1 hour = 30 degrees, 60 minutes at all). 60 / 2 (up to 30 degrees)
        */

        /* Minutes: 360 degrees / 60 minutes (multiply minutes by 6) */
        /* Seconds: 360 degrees / 60 seconds (multiply seconds by 6) */

        arrowHours.style.transform = `rotate(${(+hours * 30 - blockRotation) + (+minutes / 2)}deg)`;
        arrowMinutes.style.transform = `rotate(${+minutes * 6 - blockRotation}deg)`;
        arrowSeconds.style.transform = `rotate(${+seconds * 6 - blockRotation}deg)`;
    }

    setInterval(setDate, 1000);
});

</script>

<template>
    <div class="app">
        <div class="flex-column y-center">

            <!-- циферблат -->
            <section class="clock">
                <div class="dial">
                    <p class="dial-number one">1</p>
                    <p class="dial-number two">2</p>
                    <p class="dial-number three">3</p>
                    <p class="dial-number four">4</p>
                    <p class="dial-number five">5</p>
                    <p class="dial-number six">6</p>
                    <p class="dial-number seven">7</p>
                    <p class="dial-number eight">8</p>
                    <p class="dial-number nine">9</p>
                    <p class="dial-number ten">10</p>
                    <p class="dial-number eleven">11</p>
                    <p class="dial-number twelve">12</p>
                    <div class="dot-center"></div>
                    <div class="circle big"></div>
                    <div class="circle medium"></div>
                    <div class="circle small"></div>
                    <div class="arrow big red"></div>
                    <div class="arrow medium"></div>
                    <div class="arrow small"></div>
                </div>
            </section>

            <section class="timer">
                <!-- циферки -->
                <section class="digits flex">
                    <!-- сюда выводим JS -->
                    <div class="hours column"></div>
                    <div class="minutes column"></div>
                    <div class="seconds column"></div>
                </section>

                <!-- подписи -->
                <section class="captions flex gap-column">
                    <div class="hours column">hours</div>
                    <div class="minutes column">minutes</div>
                    <div class="seconds column">seconds</div>
                </section>
            </section>
        </div>

    </div>
</template>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400&display=swap');

/* common */
body {
    margin: 0;
    height: 100vh;
}

.app {
    font-family: 'Poppins', sans-serif;
}

/* helpers */
.flex {
    display: flex;
}

.xy-center {
    justify-content: center;
    align-items: center;
}

.y-center {
    align-items: center;
}

.x-center {
    justify-content: center;
}

.row {
    display: flex;
}

.flex-column {
    display: flex;
    flex-direction: column;
}

.column {
    flex-grow: 1;
    text-align: center;
}

.gap-column {
    gap: 0 10px;
}

/* end helpers */


/* clock circle */
.clock {
    border-radius: 50%;
    margin: 0 0 2rem 0;
    box-shadow: 0 0 10px 1px gray inset;
}

/* circle where numbers store */
.dial {
    border-radius: 50%;
    width: 450px;
    height: 450px;
    position: relative;
}

/* dot */
.dot-center {
    position: absolute;
    top: 50%;
    left: 50%;
    background-color: white;
    width: 5px;
    height: 5px;
    margin: -2.5px 0 0 -2.5px;
    border-radius: 50%;
}


/* each number */
.dial-number {
    height: 98%;
    position: absolute;
    left: 50%;
    margin-left: -7px;
    margin-top: 3px;
}

/* numbers rotation */
.one {
    transform: rotate(30deg);
}

.two {
    transform: rotate(60deg);
}

.three {
    transform: rotate(90deg);
}

.four {
    transform: rotate(120deg);
}

.five {
    transform: rotate(150deg);
}

.six {
    transform: rotate(180deg);
}

.seven {
    transform: rotate(210deg);
}

.eight {
    transform: rotate(240deg);
}

.nine {
    transform: rotate(270deg);
}

.ten {
    transform: rotate(300deg);
}

.eleven {
    transform: rotate(330deg);
}

/* end numbers */


/* circles */
.circle {
    border-radius: 50%;
    position: absolute;
    border: 1px solid gray;
    height: 100%;
    width: 100%;
}

/* circles for hours, minutes & seconds */
.circle.big {
    height: 80%;
    width: 80%;
    left: 10%;
    top: 10%;
}

.circle.medium {
    height: 65%;
    width: 65%;
    left: 17.5%;
    top: 17.5%;
}

.circle.small {
    height: 50%;
    width: 50%;
    left: 25%;
    top: 25%;
}

/* end circles */


/* arrows */
.arrow {
    position: absolute;
    left: 50%;
    top: 50%;
    height: 5px;
    margin-top: -2.5px;
    background-color: gray;
    transform-origin: left;
}

.arrow.big {
    width: 40%;
}

.arrow.medium {
    width: 32.5%;
}

.arrow.small {
    width: 25%;
}

.arrow.red {
    background-color: rgb(191, 23, 23);
    height: 3px;
}

/* end arrows */


/* timer with digits */
.timer {
    border-radius: 20px;
    width: 40%;
    box-shadow: 0 0 35px 0px #cfcfcf;
}

.digits {
    border-bottom: 1px solid #000;
    font-size: 45px;
    font-weight: 100;
}

.digits div {
    width: 100px;
    margin: 0 0 0 -15px;
}

.captions {
    text-transform: uppercase;
}
</style>