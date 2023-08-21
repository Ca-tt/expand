// for-i
// for-in
// for-of

// for-i  - простой, не работает с объектами

// for(let i = 0; i < 1000; i++) {
//     console.log('i: ', i);
// }

// 1. создать скрипт, задать ему src и вставить его в head

let script = document.createElement('script');
let head = document.querySelector('head');

script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js'

head.append(script);
