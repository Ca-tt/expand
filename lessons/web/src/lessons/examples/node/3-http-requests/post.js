import express from 'express';
import cors from 'cors';

import { countries } from './data.js';


let app = express()
let port = 3000
app.use(cors());


/* parse encoded & json data */
app.use(express.json())
app.use(express.urlencoded())


/* basic get-request handling */
app.get('/', (req, res) => {
    res.send({
        data: 'Route Express',
    });
})



/* route for displaying data */
app.get('/countries', (req, res) => {
    res.send({
        countries
    })
})

app.post('/', (req, res) => {
    res.send({
        data: 'Route Express',
    });
})


/* see req.body for POST data */
app.post('/countries', (req, res) => {
    console.log('connected!');
    console.log('req.query', req.query);
    console.log('req.params', req.params);
    console.log('req.body', req.body);

    res.send(countries);
})


app.listen(port, () => {
    console.log(`Порт запущен: http://localhost:${port}`)
})
