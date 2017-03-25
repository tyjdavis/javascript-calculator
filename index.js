
//When clicking on number button, it prints the number to the answer space and console.

let calculationArray = [];

function numberClick (event) {
  let click = event.target;
  let calcPrint = document.querySelector("#answer");
  calcPrint.textContent = click.textContent;
  let convertToInt = parseFloat(calcPrint.textContent);
  calculationArray[calculationArray.length] = convertToInt;
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
  calculationArray[calculationArray.length] = operatorPrint.textContent;
  console.log(calculationArray);
}


let operatorButtons = document.querySelectorAll('.operators button');
for (let i = 0; i < operatorButtons.length; i++) {
operatorButtons[i].addEventListener('click', operatorClick);
}




//Equals

//when pressing equals button, do operation of the array.

function equals (event) {
    let click = event.target;
    let storeInArray = document.querySelector('#answer');
    let ans;
    for (let i = 0; i < calculationArray.length; i++) {
      let iteration = calculationArray[i];
      if (iteration === "+" && isNaN(iteration)) {
        ans = calculationArray[i-1] + calculationArray[i+1];
      }
      else if (iteration === "-") {
       ans = calculationArray[i-1] - calculationArray[i+1];
      }
      else if (iteration === "x") {
        ans = calculationArray[i-1] * calculationArray[i+1];
      }
      else if (iteration === "/") {
        ans = calculationArray[i-1] / calculationArray[i+1];
      }
    }
    storeInArray.textContent = ans;
    console.log(ans);

}

let equalsButton = document.querySelector('.equals');
equalsButton.addEventListener('click', equals);



//clear

function clearScreen () {
  let current = '';
  let test = document.querySelector('#answer')
  test.textContent = current;
  calculationArray = [];
 }

let clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearScreen);
