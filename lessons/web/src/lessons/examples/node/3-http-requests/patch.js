import express from 'express';
import cors from 'cors';

import { countries } from './data.js';

let app = express()
let port = 3000
app.use(cors());

/* parse encoded & json data */
app.use(express.urlencoded())
app.use(express.json())

/* GET */
app.get('/', (req, res) => {
    res.send({
       countries,
    });
})

/* PUT */
app.patch('/', (req, res) => {
    let newName = req.body.name;
    countries.push(newName);
    
    res.status(201).end('Братан, всё ровно!')
})

/* see req.body for POST data */
app.patch('/countries', (req, res) => {
    console.log('connected!');
    console.log('req.query', req.query);
    console.log('req.params', req.params);
    console.log('req.body', req.body);

    countries.push(req.body.country);

    res.status(201).send(countries);
})

app.listen(port, () => {
    console.log(`Порт запущен: http://localhost:${port}`)
})
