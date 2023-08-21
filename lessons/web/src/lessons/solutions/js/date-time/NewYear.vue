<script setup>
import { onMounted } from 'vue';

onMounted(() => {
    let daysHtml = document.querySelector('.days')
    let hoursHtml = document.querySelector('.hours')
    let minutesHtml = document.querySelector('.minutes')
    let secondsHtml = document.querySelector('.seconds')
    
    let days, hours, minutes, seconds;
    
    setInterval(function () {
    
        let nowDate = new Date()
        let newYearDate = new Date(2024, 0, 1)
    
        /* миллисекунды - всё время */
        let differenceInMs = newYearDate - nowDate;
    
        /* всё время (в днях) + остача */
        let daysRemainder = differenceInMs / (24 * 60 * 60 * 1000);
        // console.log('daysRemainder: ', daysRemainder);
    
        /* дни (без остачи) */
        let days = Math.floor(differenceInMs / (24 * 60 * 60 * 1000));
        // console.log('days: ', days);
    
        //часы (с остачей) 
        let hoursRemainder = (daysRemainder - days) * 24;
        console.log('hoursRemainder: ', hoursRemainder);
    
        // часы (без остачи)
        let hours = Math.floor(hoursRemainder);
    
        // минуты (с остачей)
        let minutesRemainder = (hoursRemainder - hours) * 60;
        console.log('minutesRemainder: ', minutesRemainder);
    
        // минуты (без остачи)
        let minutes = Math.floor((minutesRemainder))
    
        // секунды (с остачей)
        let secondsRemainder = (minutesRemainder - minutes) * 60;
        let seconds = Math.floor(secondsRemainder);
        
        // set date
        daysHtml.innerText = days;
        hoursHtml.innerText = hours;
        minutesHtml.innerText = minutes;
        secondsHtml.innerText = seconds;
    
    }, 1000)

});
</script>

<template>
    <!-- дни:часы:минуты:секунды -->
    <section class="flex">
        <p class="days"></p>:
        <p class="hours"></p>:
        <p class="minutes"></p>:
        <p class="seconds"></p>
    </section>
</template>

<style lang="scss" scoped></style>
