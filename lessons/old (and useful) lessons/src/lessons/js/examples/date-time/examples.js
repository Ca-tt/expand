// функция (месяц) -> последний день

let startDate = new Date();
let month = startDate.getMonth();

function getLastDay(month) {
    let nextMonth = new Date(2023, month+1);
    nextMonth.setDate(0);
    return nextMonth.getDate();
}

let lastDay = getLastDay(month);
console.log('lastDay: ', lastDay);


