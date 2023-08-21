let friends = ['Damir', 'Ilia', 'Denis'];
let randomNumbers = [1, 2, 0.5, -99, 33, 28, -92.5, 11, 21, 28, 144];

let sorted = randomNumbers.sort(compareNumbers);

function compareNumbers(a, b) {
    return b - a;
}

console.log('sorted: ', sorted);
                                                                      