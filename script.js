function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(operator, num1, num2) {
    let answer;
    if (operator === '+') {
        answer = add(num1, num2);
    } else if (operator === '-') {
        answer = subtract(num1, num2);
    } else if (operator === '*') {
        answer = multiply(num1, num2);
    } else if (operator === '/') {
        answer = divide(num1, num2);
    }
    return answer;
}

function input() {
    this.classList.add('highlight');

    if (value === 0) {
        value = '';
    }
    if (this.id === 'clear') {
        value = 0;
    } else {
        value += this.textContent;
    }
    displaying.textContent = value;
}

function removeHighlight (e) {

    this.classList.remove('highlight');
}



let value = 0;
let displaying = document.querySelector('#display');
displaying.textContent = value;

let button = document.querySelectorAll('.button');

for (let i = 0; i < button.length - 1; i++) {
    button[i].addEventListener('mousedown', input);
    button[i].addEventListener('mouseup', removeHighlight);
}

console.log(button);
