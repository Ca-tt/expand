import express from 'express';
import cors from 'cors';

import { countries } from './data.js';

let app = express()
let port = 3000
app.use(cors());

/* parse encoded & json data */
app.use(express.urlencoded())
app.use(express.json())

function printSomethingUseless(req, res, next) {
    res.send('I am so useful!')

    next();
}

app.use(printSomethingUseless);

/* GET */
app.get('/', (req, res) => {
    res.send({
        countries,
    });
})

app.listen(port, () => {
    console.log(`Порт запущен: http://localhost:${port}`)
})
