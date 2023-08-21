import express from 'express';
import compression from 'compression';
import zlib from 'node:zlib';

import { dataSend } from './data/loremText.js';

const app = express();
const port = 3000;


/* request compression */
app.use((req, res, next) => {
  const gunzip = zlib.createGzip();
  
  let contentLength = 0;

  req
    .pipe(gunzip)
    .on('data', (data) => {
      contentLength += data.length;
      console.log('Compressed Request Data:', data.toString('base64'));
    })
    .on('end', () => {
      console.log('Request size:', contentLength);
      next();
    });
});


/* response compression */
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store');

  const oldWrite = res.write;
  const oldEnd = res.end;

  const chunks = [];

  res.write = function (chunk) {
    chunks.push(Buffer.from(chunk));
    oldWrite.apply(res, arguments);
  };

  res.end = function (chunk) {
    if (chunk) {
      chunks.push(Buffer.from(chunk));
    }

    const body = Buffer.concat(chunks);
    
    oldEnd.apply(res, arguments);
    console.log(`Original response size:  ${body.length} bytes`);
  };

  next();
});

app.use(compression());

app.get('/', (req, res) => {

  res.send(dataSend);
  console.log('data send!');
});

app.post('/', (req, res) => {
  const receivedData = req.body;

  // Here, you can process the receivedData or store it in a database, etc.

  // Respond with a confirmation message
  res.send('Data received successfully.');
});



app.listen(3000, () => {
  console.log(`Server started on port http://localhost:${port}`);
});