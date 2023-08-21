import express from 'express';
import cors from 'cors';

import { products } from './products.js';

let app = express()
let port = 3000
app.use(cors());

/* parse encoded & json data */
app.use(express.json())
app.use(express.urlencoded())

/* basic get-request handling */
app.get('/', (req, res) => {
    res.send(products);
})

app.get('/:count', (req, res) => {

    let count = req.params.count;
    console.log('count: ', count);
    
    let productsLimited = [];
    for (let i = 0; i < count; i++) {
        productsLimited.push(products[i]);
    }
    res.send(productsLimited);
})


app.listen(port, () => {
    console.log(`Порт запущен: http://localhost:${port}`)
})
