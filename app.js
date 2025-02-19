/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/

let num1 = 0;
let num2 = 0;
let operator = "";

/*------------------------ Cached Element References ------------------------*/

const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display')
const calculator = document.querySelector('#calculator');

/*----------------------------- Event Listeners -----------------------------*/



buttons.forEach((button) => {
  button.addEventListener('click', (event) => {
    const buttonValue = event.target.innerText;

    if (buttonValue === "C") {
      display.innerText = "";
      num1 = 0;
      operator = "";
      return;
    }
 
    display.innerText += buttonValue;
  });
});

// calculator.addEventListener('click', (event) => {


//   // Example
//   if (event.target.classList.contains('number')) {
//     num1 = buttonValue;
//     console.log(num1);
//   }

//   // Example
//   if (event.target.innerText === '*') {
//     // Do something with this operator
//   }

//   if (event.target.classList.contains('operator')) {

//   }
// });

/*-------------------------------- Functions --------------------------------*/
function handleClick() {

}

function add(num1, num2, operator) {
  // add two numbers
}

function subtract(num1, num2, operator) {
  // subtract num2 from num 1
}

function multiply(num1, num2, operator) {
  // multiply both nummbers
}

function divide(num1, num2, operator) {
  // make sure num2 is not 0
    // if it is, return a message undefined
  
    // if num2 is not 0
    // divide num 1 by num 2
}
const add = (num1, num2, operator) => {
    if (operator === "+" ) {
      return num1 + num2;
    } 
}