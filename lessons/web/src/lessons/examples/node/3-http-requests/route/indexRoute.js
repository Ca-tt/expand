import express from 'express'
import cors from 'cors';

import { router as bicycleRouter } from './bicyclesRoute.js'

const app = express()
const port = 3000

app.use(cors());

/* 
    Просто базовый путь
    Добавил вывод HTML на страницу для удобства    
*/
app.get('/', (req, res) => {
    res.send(`
        <a href="/bicycles">bicycles</a>
        <a href="/bicycles/prices">prices</a>
    `);
})

/* 
    Задействуем рауты 
    Теперь наш базовый раут - это bicycles
    Далее смотри файл bicycles.js
*/

app.use('/bicycles', bicycleRouter)


app.listen(port, () => {
    console.log(`Порт запущен: http://localhost:${port}`)
})
