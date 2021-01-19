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


function input(key) {
  //  this.classList.add('highlight'); // Adds highlight to button press

  
    if ((value === '0' || value === 0) 
            && this.id !== 'divide' 
            && this.id !== 'multiply' 
            && this.id !== 'subtract' 
            && this.id !== 'add' 
            && this.id !== 'equals' ){
        value = '';
    }
    if (key === ' ' || this.id === 'clear') {
        consecEquals = 0;
        clearAfterEquals = 0;
        answer = '';
        haveFirst = 0;
        clearNext = 0;
        num1 = '';
        num2 = '';
        operator = '';
        value = '0';
        consecOperator = 0;
       // haveFirst = 0;
    } else if (key === '+' || this.id === 'add') {
        if (num1 !== '' && num2 === '' && consecOperator !== 1) {
            num2 = value;
            answer = operate (operator, num1, num2);
            value = answer;
            num1 = answer;
            num2 = '';
            clearAfterEquals = 1;
            consecEquals = 0;
            operator = 'add';
            consecOperator = 1;
        } else if (consecOperator !== 1) {
            operator = 'add';
            num1 = value;
            num2 = '';
            clearNext = 1;
            consecEquals = 0;
            clearAfterEquals = 0;
            consecOperator = 1;
        }  else if (consecOperator === 1) {
            operator = 'add';
        }
    } else if (key === '-' || this.id === 'subtract') {
        if (num1 !== '' && num2 === '' && consecOperator !== 1) {
            num2 = value;
            answer = operate (operator, num1, num2);
            value = answer;
            num1 = answer;
            num2 = '';
            clearAfterEquals = 1;
            consecEquals = 0;
            operator = 'subtract';
            consecOperator = 1;
        } else if (consecOperator !== 1) {
            operator = 'subtract';
            num1 = value;
            num2 = '';
            clearNext = 1;
            consecEquals = 0;
            clearAfterEquals = 0;
            consecOperator = 1;
        } else if (consecOperator === 1) {
            operator = 'subtract';
        }
    } else if (key === '*' || this.id === 'multiply') {
        if (num1 !== '' && num2 === '' && consecOperator !== 1) {
            num2 = value;
            answer = operate (operator, num1, num2);
            value = answer;
            num1 = answer;
            num2 = '';
            clearAfterEquals = 1;
            consecEquals = 0;
            operator = 'multiply';
            consecOperator = 1;
        } else if (consecOperator !== 1) {
            operator = 'multiply';
            num1 = value;
            num2 = '';
            clearNext = 1;
            consecEquals = 0;
            clearAfterEquals = 0;
            consecOperator = 1;
        } else if (consecOperator === 1) {
            operator = 'multiply';
            console.log('UYES');
        }
    } else if (key === '/' || this.id === 'divide') {
        if (num1 !== '' && num2 === '' && consecOperator !== 1) {
            num2 = value;
            answer = operate (operator, num1, num2);
            value = answer;
            num1 = answer;
            num2 = '';
            clearAfterEquals = 1;
            consecEquals = 0;
            operator = 'divide';
            consecOperator = 1;
        } else if (consecOperator !== 1) {
            operator = 'divide';
            num1 = value;
            num2 = '';
            clearNext = 1;
            consecEquals = 0;
            clearAfterEquals = 0;
            consecOperator = 1;
        } else if (consecOperator === 1) {
            operator = 'divide';
        }
    } else if (key === 'Enter' || key === '=' || this.id === 'equals') {
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
        consecOperator = 0;
    } else if (key === '.' || this.id === 'decimal') {
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
        value += '.';
        }
        consecOperator = 0;
    } else if (key === 'Backspace' || this.id === 'delete') {
        if (clearAfterEquals === 0) {
            value = value.slice(0, -1);
        }
        if (value === '')
        {
            value = 0;
        }
        consecOperator = 0;
    } else {
        if (clearNext === 1) {
            value = '';
            clearNext = 0;
        
        } else if (clearAfterEquals === 1) {
            value = '';
            clearAfterEquals = 0;
        }
        consecEquals = 0;
        consecOperator = 0;
        if (key === '0' || this.id === 'zero') value += 0;
        if (key === '1' || this.id === 'one') value += 1;
        if (key === '2' || this.id === 'two') value += 2;
        if (key === '3' || this.id === 'three') value += 3;
        if (key === '4' || this.id === 'four') value += 4;
        if (key === '5' || this.id === 'five') value += 5;
        if (key === '6' || this.id === 'six') value += 6;
        if (key === '7' || this.id === 'seven') value += 7;
        if (key === '8' || this.id === 'eight') value += 8;
        if (key === '9' || this.id === 'nine') value += 9;
    }
    
    displaying.textContent = value;

 //   console.log('value: ' + value,'num1: ' + num1, 'num2: ' + num2, 'operator: ' + operator);

}

function keypress (key) {

    if (
        key.key === '1'
        || key.key === '2'
        || key.key === '3'
        || key.key === '4'
        || key.key === '5'
        || key.key === '6'
        || key.key === '7'
        || key.key === '8'
        || key.key === '9'
        || key.key === '0'
        || key.key === '+'
        || key.key === '-'
        || key.key === '*'
        || key.key === '/'
        || key.key === '='
        || key.key === 'Enter'
        || key.key === '.'
        || key.key === 'Backspace'
        || key.key === ' '
        ) {
        input(key.key);
    }

}

/* function removeHighlight (e) {

    this.classList.remove('highlight');
} */

let consecOperator = 0;
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

document.addEventListener('keydown', keypress);