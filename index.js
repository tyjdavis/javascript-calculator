
//Number buttons

function numberClick (event) {
  let click = event.target;
  let calcInput = document.querySelector("#answer");
  calcInput.textContent = calcInput.textContent + click.textContent;
  let convertToInt = parseFloat(calcInput.textContent);
  //console.log(convertToInt);
}

let numberButtons = document.querySelectorAll('#numbers button');
for (let i = 0; i < numberButtons.length; i++) {
numberButtons[i].addEventListener('click', numberClick);
}


//Operator buttons

function operatorClick (event) {
  let click = event.target;
  let calcInput = document.querySelector("#answer");
  calcInput.textContent = calcInput.textContent + click.textContent;
  let convertToInt = parseFloat(calcInput.textContent);
}

let operatorButtons = document.querySelectorAll('.operators button');
for (let i = 0; i < operatorButtons.length; i++) {
operatorButtons[i].addEventListener('click', operatorClick);
}




//Operations

function addition () {

}

function subtraction () {

}

function multiply () {

}

function divide () {

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
