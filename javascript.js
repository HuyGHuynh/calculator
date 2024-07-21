function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function operate(num1, operator, num2) {
    switch(operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            console.error("Invalid operator");
    }
}

let firstNumber;
let operator;
let secondNumber;
let opPos; // operator position
const opRegex = /[+\-*\/]/;

//alert(operate(firstNumber, operator, secondNumber));

const textfield = document.querySelector('#result');

let displayField = ""
function display(value) {
    if(value == "=") {
        if(opRegex.test(value)) { // Check incorrect input
            alert("Missing operator");
            return;
        }
        else {
            opPos = displayField.search(opRegex);
            firstNumber = Number(displayField.substring(0, opPos));
            operator = displayField.charAt(opPos);
            secondNumber = Number(displayField.substring(opPos + 1));
            displayField = operate(firstNumber, operator, secondNumber);
        }
    }
    else if(value == "clear") {
        displayField = ""
    }
    else if (displayField.length == 0) {
        if(opRegex.test(value)) { // Check incorrect input
            alert("First input must not be an operator");
            return;
        }
        displayField = String(value);
    }
    else {
        if(opRegex.test(value) && opRegex.test(textfield.value)) { // Check incorrect input
            alert("Cannot have more than 1 operator");
            return;
        }
        displayField += String(value);
    }
    textfield.value = displayField;
}
function setupButton(val) {
    const button = document.querySelector(`button[value="${val}"]`);
    button.addEventListener("click", (e) => display(e.target.value));
}
for(let i = 1; i <= 9; i++) {
    setupButton(i)
}
setupButton('+')
setupButton('-')
setupButton('*')
setupButton('/')
setupButton('=')
setupButton('clear')
