/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

let numArray = [];
let num1;
let num2;
let output;
let buttonValue;
let operator;
let equals;

/*------------------------ Cached Element References ------------------------*/

const operatorEls = document.querySelectorAll(".button.operator");
const displayEl = document.querySelector(".display");
const buttonEqualsEl = document.querySelector(".button.equals");
const numberEls = document.querySelectorAll(".button.number");

/*----------------------------- Event Listeners -----------------------------*/

numberEls.forEach((button) => {
  button.addEventListener("click", handleNumberButtonClick);
});

buttonEqualsEl.addEventListener("click", handleEqualsClick);

operatorEls.forEach((operator) => {
  operator.addEventListener("click", handleOperatorClick);
});

/*-------------------------------- Functions --------------------------------*/
function handleNumberButtonClick(event) {
  if (output) { // allows user calculate another value without having to clear, after initial equal button press
    clear();
  }
  buttonValue = event.target.textContent; 
  if (displayEl.innerText === "0") {
    displayEl.innerText = "";
    displayEl.innerText = buttonValue;
  } else {
    displayEl.innerText += buttonValue;
  }
  numArray.push(buttonValue);
}

function handleOperatorClick(event) {

  displayEl.innerText = "0";

  if (!Number.isFinite(num1)) {
    num1 = convertArrayElementsToNumber(numArray);
    numArray = [];
  } else {
    num2 = convertArrayElementsToNumber(numArray);
  }

  operator = event.target.textContent;
  if (operator === "C") {
    clear();
  }
}

function handleEqualsClick() {
  num2 = convertArrayElementsToNumber(numArray);
  if (num1 === undefined || num1 === null) {
    displayEl.innerText = "undefined";
  } else if (equals) { // allows user to continuously press equals and perform same operation
    num1 = output;
    calculate(num1, num2);
  } else {
    calculate(num1, num2);
  }
  equals = true;
}

function clear() {
  num1 = null;
  num2 = null;
  numArray = [];
  output = null;
  buttonValue = null;
  operator = null;
  equals = false;
  displayEl.innerText = "0";
}

function calculate(num1, num2) {
  if (operator === "+") {
    output = add(num1, num2);
  } else if (operator === "-") {
    output = subtract(num1, num2);
  } else if (operator === "*") {
    output = multiply(num1, num2);
  } else if (operator === "/") {
    output = divide(num1, num2);
  }
  
  displayEl.innerText = output;
}

function convertArrayElementsToNumber(array) {
  return parseInt(array.join(""));
}

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
