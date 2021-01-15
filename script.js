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
    num1 = Number(num1);
    num2 = Number(num2);

    if (operator === 'add') {
        answer = add(num1, num2);
    } else if (operator === 'subtract') {
        answer = subtract(num1, num2);
    } else if (operator === 'multiply') {
        answer = multiply(num1, num2);
    } else if (operator === 'divide') {
        answer = divide(num1, num2);
    }
    console.log('answer: ' + answer);
    if (answer === Infinity || isNaN(answer) ) {
        return 'oops';
    } else {
        return Math.round(answer * 100000) / 100000;
    }
}

function input() {
  //  this.classList.add('highlight'); // Adds highlight to button press

    if ((value === '0' || value === 0) 
            && this.id !== 'divide' 
            && this.id !== 'multiply' 
            && this.id !== 'subtract' 
            && this.id !== 'add' 
            && this.id !== 'equals' ){
        value = '';
    }
    if (this.id === 'clear') {
        consecEquals = 0;
        clearAfterEquals = 0;
        answer = '';
        haveFirst = 0;
        clearNext = 0;
        num1 = '';
        num2 = '';
        operator = '';
        value = '0';
       // haveFirst = 0;
    } else if (this.id === 'divide' || this.id === 'multiply' || this.id === 'subtract' || this.id === 'add') {
        if (num1 !== '' && num2 === '') {
            num2 = value;
            answer = operate (operator, num1, num2);
            value = answer;
            num1 = answer;
            num2 = '';
            clearAfterEquals = 1;
            consecEquals = 1;
            operator = this.id;
        } else {
            operator = this.id;
            num1 = value;
            num2 = '';
            clearNext = 1;
            consecEquals = 0;
        }

      //  haveFirst = 1;
    } else if (this.id === 'equals') {
        if (consecEquals !== 1 && num1 !== '') {
            num2 = value;
        }
        if (num1 === '' && num2 === ''){
        } else {
            answer = operate (operator, num1, num2);
            value = answer;
            num1 = answer;
            clearAfterEquals = 1;
            consecEquals = 1;
        }
    } else if (this.id === 'decimal') {
        if (clearNext === 1) {
            value = '0';
            clearNext = 0;
        }
        if (value === '') {
            value = 0;
        } else if (clearAfterEquals === 1) {
            value = '0';
            clearAfterEquals = 0;
        }
        test = value.toString();
        if (!test.includes('.')) {
        consecEquals = 0;
        value += this.textContent;
        }
    } else {
        if (clearNext === 1) {
            value = '';
            clearNext = 0;
        
        } else if (clearAfterEquals === 1) {
            value = '';
            clearAfterEquals = 0;
        }
        consecEquals = 0;
        value += this.textContent;
    }

    displaying.textContent = value;

    console.log('num1: ' + num1, 'num2: ' + num2, 'operator:' + operator);
}

function removeHighlight (e) {

    this.classList.remove('highlight');
}

let consecEquals = 0;
let clearAfterEquals = 0;
let answer = '';
let haveFirst = 0;
let clearNext = 0;
let num1 = '';
let num2 = '';
let operator = '';
let value = '0';

let displaying = document.querySelector('#display');
displaying.textContent = value;

let button = document.querySelectorAll('.button');

for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('mousedown', input);
 //   button[i].addEventListener('mouseup', removeHighlight); // Removes highlight from button press
}


