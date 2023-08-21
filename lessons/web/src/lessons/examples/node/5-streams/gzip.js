import { createGzip, createGunzip, unzip, deflate } from 'node:zlib'
import { pipeline } from 'node:stream'
import {
    createReadStream,
    createWriteStream,
} from 'node:fs'


import { fileURLToPath } from 'url';
import { dirname as __dirname } from 'path';

const filename = fileURLToPath(import.meta.url);
const dirname = __dirname(filename);

const loremFile = dirname + '/files/lorem.txt';
const fileToWrite = dirname + '/files/compressed.gz';

// const compressedFile = dirname + '/files/compressed.gz';
// const decompressedFile = dirname + '/files/decompressed.txt';

// const gzip = createGunzip();
// const source = createReadStream(fileToWrite);
// const destination = createWriteStream(loremFile);

// pipeline(source, gzip, destination, (err) => {
//     if (err) {
//         console.error('An error occurred:', err);
//         process.exitCode = 1;
//     }
// });

const input = '.................................';
deflate(input, (err, buffer) => {
  if (err) {
    console.error('An error occurred:', err);
    process.exitCode = 1;
  }
  console.log(buffer.toString('base64'));
});

const buffer = Buffer.from('eJzT0yMAAGTvBe8=', 'base64');
unzip(buffer, (err, buffer) => {
    if (err) {
        console.error('An error occurred:', err);
        process.exitCode = 1;
    }
    console.log(buffer.toString());
});