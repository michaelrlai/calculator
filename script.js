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

function works() {
    displayOnScreen.textContent = '1';
}

function works2() {
    displayOnScreen.textContent = '2';
}

//let calculate = operate('/', -5, -5);

let displayOnScreen = document.querySelector('#display');
displayOnScreen.textContent = '0';

let oneButton = document.querySelector('#one');
oneButton.addEventListener('click', works);

let twoButton = document.querySelector('#two');
twoButton.addEventListener('click', works2);


