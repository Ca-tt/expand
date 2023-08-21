import fs from 'node:fs';
import zlib from 'node:zlib';

import { fileURLToPath } from 'url';
import { dirname as __dirname } from 'path';

const filename = fileURLToPath(import.meta.url);
const dirname = __dirname(filename);

const loremFile = dirname + '/files/lorem.txt';
const fileToWrite = dirname + '/files/compressed.gz';

let readStream = fs.createReadStream(loremFile);
let writeStream = fs.createWriteStream(fileToWrite);

// обычный поток чтение / запись
// readStream.on('data', (chunk) => {
//     console.log('chunk: ', chunk);
//     writeStream.write(chunk);
// })


function handleError() {
    console.log('error!');
    readStream.destroy();
    writeStream.end('finish');
}

let compressStream = zlib.createGzip();

// дуплексный поток: чтение и запись
readStream
    .on('error', handleError)
    .pipe(compressStream)
    .on('end', () => {
        console.log('compression complete');
    })
    .pipe(writeStream)
    .on('error', handleError)
    .on('finish', () => {
        console.log('rewrite complete');
    })
