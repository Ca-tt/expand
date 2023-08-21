import fs from 'fs';
import { createReadStream, createWriteStream } from 'fs';
import { createBrotliCompress, createGzip } from 'zlib';

import { fileURLToPath } from 'url';
import { dirname as __dirname } from 'path';

const filename = fileURLToPath(import.meta.url);
const dirname = __dirname(filename);

const inputFile = dirname + '/files/lorem.txt';
const outputFile = dirname + '/compressed/lorem.txt.gz';

const input = createReadStream(inputFile);
const output = createWriteStream(outputFile);

const gzip = createBrotliCompress({
    level: 9,
    chunkSize: 1024,
});

input
    .on('open', () => {
        console.log('file opened.');

        fs.stat(inputFile, (err, stats) => {
            console.log('initial file size: ', stats.size);
        });

    })
    .pipe(gzip)
    .on('data', (chunk) => {
        // let compression = gzip.createGzip();
        console.log('encoded chunk: ', chunk.toString('base64'));
        
        /* encoded chunk size */
        console.log('encoded chunk size: ', chunk.length);
    })
    .pipe(output)
    .on('finish', () => {
        fs.stat(outputFile, (err, stats) => {
            console.log('reduced file size: ', stats.size);
        });
        console.log('File compression completed.');
    })