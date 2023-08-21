import express from 'express'
import cors from 'cors';

const app = express()
const port = 3000

app.use(cors());

app.route('/')
    .get((req, res) => {
        res.send({
            text: "GET request"
        })
    })
    .post((req, res) => {
        res.json({
            text: "POST request"
        })
    })
    .put((req, res) => {
        res.status(201).json({
            data: 'PUT request'
        });
    })
    .delete((req, res) => {
        res.status(200);
    })


app.listen(port, () => {
    console.log(`Порт запущен: http://localhost:${port}`)
})
