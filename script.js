// document.body.style.backgroundColor = 'rgb(30, 30, 30)';

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

let calculate = operate('/', -5, -5)

console.log(calculate);