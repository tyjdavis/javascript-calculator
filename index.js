
//When clicking on number button, it prints the number to the answer space and console.

let calculationArray = [];

function numberClick (event) {
  let click = event.target;
  let calcPrint = document.querySelector("#answer");
  //calcInput.textContent = calcInput.textContent + click.textContent;
  calcPrint.textContent = click.textContent;
  let convertToInt = parseFloat(calcPrint.textContent);
  //let makeArray = Array(convertToInt);

  //maybe need a for loop?
  calculationArray[0] = convertToInt;

  console.log(calculationArray);
}

let numberButtons = document.querySelectorAll('#numbers button');
for (let i = 0; i < numberButtons.length; i++) {
numberButtons[i].addEventListener('click', numberClick);
}




//When clicking operator button it prints the operator to the answer space and console.

function operatorClick (event) {
  let click = event.target;
  let operatorPrint = document.querySelector("#answer");
  operatorPrint.textContent = click.textContent;
  console.log(operatorPrint.textContent);
}

let operatorButtons = document.querySelectorAll('.operators button');
for (let i = 0; i < operatorButtons.length; i++) {
operatorButtons[i].addEventListener('click', operatorClick);
}




//Equals

function equals () {
  let click = event.target.textContent;
  if (click === '=') {
    let storeInArray = document.querySelector('#answer');
    let makeArray = Array(storeInArray.textContent);
    var arrayOfNumbers = makeArray.map(Number);
    console.log(arrayOfNumbers);
  }
}

let equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', equals);



//clear

function clearScreen () {
  let current = '';
  let test = document.querySelector('#answer')
  test.textContent = current;
 }

let clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearScreen);
