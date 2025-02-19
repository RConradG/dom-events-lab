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

calculator.addEventListener('click', (event) => {


  // Example
  if (event.target.classList.contains('number')) {
    num1 = buttonValue;
    console.log(num1);
  }

  // Example
  if (event.target.innerText === '*') {
    // Do something with this operator
  }

  if (event.target.classList.contains('operator')) {

  }
});

/*-------------------------------- Functions --------------------------------*/

const add = (num1, num2, operator) => {
    if (operator === "+" ) {
      return num1 + num2;
    } 
}