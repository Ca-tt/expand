import express from 'express'
const router = express.Router()

/* 
  Тут наш базовый раут - это /bicycles
  Мы отталкиваемся от него 

*/

/* 
  Эта мидла будет работать только для раутов
  с велосипедами
*/
router.use((req, res, next) => {
  console.log('Time: ', Date.now())
  next()
})



// когда мы вбиваем /bicycles, нас закинет сюда
router.get('/', (req, res) => {
  res.send({
    data: 'Магазин Bicycles. У нас есть ВСЁ (для велосипедов)...'
  })
})

/* 
  Далее мы отталкиваемся от базового раута 
  Получится путь /bicycles/prices
*/
router.get('/prices', (req, res) => {
  res.send({
    data: 'Отправляю тебе прайс с великами...'
  })
})

/* Метод route */


// отправляем велики в файл app...
export { router };