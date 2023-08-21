// elements
let daysSpan = document.querySelector('.days');
let hoursSpan = document.querySelector('.hours');
let minutesSpan = document.querySelector('.minutes');
let secondsSpan = document.querySelector('.seconds');

// base dates


// console.log('todayDate: ', todayDate);
// console.log('newYearDate: ', newYearDate);





// allminutes: minutesRemainder * 60



// console.log('allMilliseconds: ', allMilliseconds);
// console.log('time left: ', allTimeLeft);
// // console.log('daysLeft: ', daysLeft);
// console.log('daysRemainder: ', daysRemainder);
// console.log('daysToHoursLeft: ', daysToHoursLeft);
// console.log('minutesRemainder: ', minutesRemainder);
// // console.log('hoursLeft: ', hoursLeft);
// console.log('minutes left: ', minutesRemainder);
// // console.log('minutesLeft: ', minutesLeft);
// console.log('secondsRemainder: ', secondsRemainder);
// console.log('secondsLeft: ', secondsLeft);

// console.log('minutesRemainder: ', minutesLeft);

function dateCalculation() {
    let todayDate = new Date();
    let newYearDate = new Date(new Date().getFullYear() + 1, 0, 1);
    
    let allMilliseconds = newYearDate - todayDate;

    // each step depends on previous
    // each number has remainder, used for next calculation

    // days
    let daysWithHours = allMilliseconds / 24 / 60 / 60 / 1000;
    let days = Math.floor(daysWithHours);

    // hours
    let hoursWithMinutes = (daysWithHours - days) % 24 * 24;
    let hours = Math.floor(hoursWithMinutes);
    
    // minutes
    let minutesWithSeconds = (hoursWithMinutes - hours) * 60;
    let minutes = Math.floor(minutesWithSeconds);

    // seconds 
    let secondsWithMilli = (minutesWithSeconds - minutes) * 60;
    let seconds = Math.floor(secondsWithMilli)

    // html update
    daysSpan.innerHTML = days;
    hoursSpan.innerHTML = hours;
    minutesSpan.innerHTML = minutes;
    secondsSpan.innerHTML = seconds;
}


setInterval(() => {
    dateCalculation();
}, 1000)




