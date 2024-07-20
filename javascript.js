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

let firstNumber = 2;
let operator = "*";
let secondNumber = 3;

//alert(operate(firstNumber, operator, secondNumber));

const textfield = document.querySelector('#result');

let displayField = ""
function display(value) {
    if (displayField.length == 0)
        displayField = String(value);
    else
        displayField += String(value);
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
setupButton('clear')
