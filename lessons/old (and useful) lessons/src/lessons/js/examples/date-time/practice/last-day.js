let date = new Date();
let month = startDate.getMonth();

console.log('date: ', startDate);
console.log('month: ', month);


function lastDay(month) {
    return new Date(startDate.getFullYear(), month + 1, 0);
}

let lastDayDate = lastDay(month);
console.log('lastDayDate: ', lastDayDate);