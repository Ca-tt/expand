let zapoyDay = new Date().getDay()
let zapoyDate = new Date().getDate()
let zapoyMonth = new Date().getMonth()

let days = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']
let month = [
    'январь',
    'февраль',
    'март',
    'апрель',
    'май',
    'июнь',
    'июль',
    'август',
    'сентябрь',
    'октябрь',
    'ноябрь',
    'декабрь',
]

console.log(
    "Дамир, не забывай, сегодня:",
    "День -", days[zapoyDay],
    ", Дата -", zapoyDate,
    ", Месяц -", month[zapoyMonth]
);

// // zapoyDay (день недели)
// // zapoyMonth (месяц)
// // месяц: 0 - 11

// // zapoyDay - индекс days

// // день недели: 0 - 6
// // 0 - вс
// // 1 - пн
// // 2 - вт
// // 3 - ср
