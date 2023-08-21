let input = document.getElementById("input");
// console.log(input);

input.oninput = function() {
    let text = input.value;
    console.log(text);
}

const inputStyles = window.getComputedStyle(input, null);
console.log(inputStyles);

// console.log('- button.style -', input.style);

// input.style.backgroundColor = '#000';

// input.classList.add()
// input.classList.remove()
// input.classList.toggle()