/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

let numArray = [];
let num1 = [];
let num2;
let output;
let buttonValue;
let operator;
let calculatedNumber;
let isOperator = false;
let equation = [];

/*------------------------ Cached Element References ------------------------*/

const operatorEls = document.querySelectorAll(".button.operator");
const displayEl = document.querySelector(".display");
const buttonEqualsEl = document.querySelector(".button.equals");
const numberEls = document.querySelectorAll(".button.number");
const calculator = document.querySelector("#calculator");

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
  displayEl.innerText = "";
  buttonValue = event.target.textContent; //Possible Delete Me
  displayEl.innerText += buttonValue;
  numArray.push(buttonValue);
  console.log(numArray);
}

function handleOperatorClick(event) {
  if (!Number.isFinite(num1)) {
    num1 = convertArrayElementsToNumber(numArray);
    numArray = [];
  } else {
    console.log("In else statement");
    num2 = convertArrayElementsToNumber(numArray);
  }

  console.log(numArray);
  operator = event.target.textContent;
  console.log(num1); // DELETE ME
  console.log(num2); // DELETE ME
  if (operator === "C") {
    clear();
  }
}

function handleEqualsClick(event) {
  num2 = convertArrayElementsToNumber(numArray);
  console.log(num2);
  // buttonValue = event.target.textContent;

  if (operator === "+") {
    displayEl.innerText = add(num1, num2);
  } else if (operator === "-") {
    displayEl.innerText = subtract(num1, num2);
  } else if (operator === "*") {
    displayEl.innerText = multiply(num1, num2);
  } else if (operator === "/") {
    displayEl.innerText = divide(num1, num2);
  } else {
  }
}

function updateScreen() {
  // update the screen whenever a button is pressed
  displayEl.innerText += buttonValue;
}

function displayNumber(event) {
  // const buttonValue = event.target.textContent;
  // // console.log(buttonValue); // Delete Me
  // if (buttonValue === "C") {
  //   displayEl.innerText = "0";
  //   equation = [];
  //   isOperator = false;
  //   return;
  // }
  // if (displayEl.innerText === "0" || isOperator) {
  //   displayEl.innerText = buttonValue;
  // } else {
  //   displayEl.innerText += buttonValue;
  // }
  // isOperator = false;
}

function removeActiveClass() {
  operatorEls.forEach((btn) => btn.classList.remove("active"));
}

function clear() {
  displayEl.innerText = "0";
  num1 = null;
  num2 = null;
  numArray = [];
  num1 = null;
  num2 = null;
  output = null;
  buttonValue = null;
  operator = null;
  calculatedNumber = null;
}

function convertArrayElementsToNumber(array) {
  return parseInt(array.join(""));
}

function add(num1, num2) {
  return num1 + num2;
}

function subtract(num1, num2, operator) {
  // subtract num2 from num 1
  return num1 - num2;
}

function multiply(num1, num2, operator) {
  // multiply both nummbers
  return num1 * num2;
}

function divide(num1, num2, operator) {
  // make sure num2 is not 0
  // if it is, return a message undefined
  // if num2 is not 0
  // divide num 1 by num 2
  return num1 / num2;
}

function equals() {
  // complete operation
}

// ---------------------------delete bottom code------------------------------------------------------

// const calculate = (n1, operator, n2) => {
//   let result = ''

//      if (operator === 'adds') {
//     result = parseFloat(n1) + parseFloat(n2)
//   } else if (operator === 'subtracts') {
//     result = parseFloat(n1) - parseFloat(n2)
//   } else if (operator === 'multiplies') {
//     result = parseFloat(n1) * parseFloat(n2)
//   } else if (operator === 'divides') {
//     result = parseFloat(n1) / parseFloat(n2)
//   }

//   return result
// }

// const calculator = document.querySelector('#holder')
// const display = calculator.querySelector('#display')
// const keys = calculator.querySelector('#calc')

// keys.addEventListener('click', e => {
//   if (e.target.matches('button')) {
//     const key = e.target
//     const action = key.dataset.action
//     const keyContent = key.textContent
//     const displayedNum = display.textContent
//     const previousKeyType = calculator.dataset.previousKeyType

//     if (!action) {
//       if (
//         displayedNum === '0' ||
//         previousKeyType === 'operator' ||
//         previousKeyType === 'calculate'
//       ) {
//         display.textContent = keyContent
//       } else {
//         display.textContent = displayedNum + keyContent
//       }
//       calculator.dataset.previousKeyType = 'number'
//     }

//     if(action === 'specify') {
//  if(!displayedNum.includes('-')) {
//    display.textContent = '-' + displayedNum
//  } else if (
//         previousKeyType === 'operator' ||
//         previousKeyType === 'calculate'
//       ) {
//         display.textContent = '-0'
//       }
//     }

//     if (action === 'decimals') {
//       if (!displayedNum.includes('.')) {
//         display.textContent = displayedNum + '.'
//       } else if (
//         previousKeyType === 'operator' ||
//         previousKeyType === 'calculate'
//       ) {
//         display.textContent = '0.'
//       }

//       calculator.dataset.previousKeyType = 'decimals'
//     }

//     if (
//       action === 'adds' ||
//       action === 'subtracts' ||
//       action === 'multiplies' ||
//       action === 'divides'
//     ) {
//       const firstValue = calculator.dataset.firstValue
//       const operator = calculator.dataset.operator
//       const secondValue = displayedNum

//     if (
//         firstValue &&
//         operator &&
//         previousKeyType !== 'operator' &&
//         previousKeyType !== 'calculate'
//       ) {
//         const calcValue = calculate(firstValue, operator, secondValue)
//         display.textContent = calcValue
//         calculator.dataset.firstValue = calcValue
//       } else {
//         calculator.dataset.firstValue = displayedNum
//       }

//       calculator.dataset.previousKeyType = 'operator'
//       calculator.dataset.operator = action

//     }

//     if (action === 'clears') {
//       if (key.textContent === 'AC') {
//         calculator.dataset.firstValue = ''
//         calculator.dataset.modValue = ''
//         calculator.dataset.operator = ''
//         calculator.dataset.previousKeyType = ''
//       } else {
//         key.textContent = 'AC'
//       }

//       display.textContent = 0
//       calculator.dataset.previousKeyType = 'clears'
//     }

//     if (action !== 'clears') {
//       const clearButton = calculator.querySelector('[data-action=clears]')
//       clearButton.textContent = 'AC'
//     }

//     if (action === 'calculate') {
//       let firstValue = calculator.dataset.firstValue
//       const operator = calculator.dataset.operator
//       let secondValue = displayedNum

//       if (firstValue) {
//         if (previousKeyType === 'calculate') {
//           firstValue = displayedNum
//           secondValue = calculator.dataset.modValue
//         }

//         display.textContent = calculate(firstValue, operator, secondValue)
//       }

//       calculator.dataset.modValue = secondValue
//       calculator.dataset.previousKeyType = 'calculate'
//     }
//   }
// })

// You may add additional external JS and CSS as needed to complete the project, however the current external resource MUST remain in place for the tests to work. BABEL must also be left in place.

/***********
INSTRUCTIONS:
  - Select the project you would 
    like to complete from the dropdown 
    menu.
  - Click the "RUN TESTS" button to
    run the tests against the blank 
    pen.
  - Click the "TESTS" button to see 
    the individual test cases. 
    (should all be failing at first)
  - Start coding! As you fulfill each
    test case, you will see them go   
    from red to green.
  - As you start to build out your 
    project, when tests are failing, 
    you should get helpful errors 
    along the way!
    ************/

// PLEASE NOTE: Adding global style rules using the * selector, or by adding rules to body {..} or html {..}, or to all elements within body or html, i.e. h1 {..}, has the potential to pollute the test suite's CSS. Try adding: * { color: red }, for a quick example!

// Once you have read the above messages, you can delete all comments.
