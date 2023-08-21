import express from 'express';
import cors from 'cors';

import { countries, getRandom } from './data.js';

const app = express()
const port = 3000
app.use(cors());


/* basic get-request handling */
app.get('/', (req, res) => {
    res.send({
        data: 'Route Express',
    });
})


/* create additional "route" for get-request */
app.get('/countries', (req, res) => {
    res.send({
        data: countries
    });
})


/* pick up random country */
app.get('/country', (req, res) => {
    let randomElement = getRandom(countries.length);
    console.log('random: ', randomElement);

    res.send({
        data: randomElement
    });
})


/* params handled by regular expression */
app.get('/:name(\\d+):id', (req, res) => {
    res.send({
        data: 'Route Express',
        params: req.params
    });
})

/* query parameters (req.query) */
app.get('/countries-params', (req, res) => {
    res.send({
        data: countries,
        params: req.params,
        queryParams: req.query,
    });
})

/* life without req.query */
app.get('/countries/:name/:sort-:year-:author', (req, res) => {
    res.send({
        data: countries,
        params: req.params,
        queryParams: req.query,
    });
})


app.listen(port, () => {
    console.log(`Порт запущен: http://localhost:${port}`)
})
