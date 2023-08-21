import fs from 'node:fs';
import zlib from 'node:zlib';

import { fileURLToPath } from 'url';
import { dirname as __dirname } from 'path';

const filename = fileURLToPath(import.meta.url);
const dirname = __dirname(filename);

const fileToWrite = dirname + '/files/compressed.gz';
const decompressedFile = dirname + '/files/decompressed.txt';

let readStreamCompress = fs.createReadStream(fileToWrite);
let writeStreamDecompress = fs.createWriteStream(decompressedFile);

readStreamCompress
    .on('open', () => {
        console.log('opened!');
    })
    .pipe(zlib.createGunzip())
    .pipe(writeStreamDecompress)
    .on('close', () => {
        console.log('closing file...');
    })