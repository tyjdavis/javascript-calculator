let firstButton;
let secondButton;
let Memory  = "0";
let current = "0";
let Operation = 0;
let MAXLENGTH = 30;


function buttonClick (event) {
  let click = event.target.textContent;
  let calcInput = document.querySelector("#answer");
  calcInput.textContent = click;
}

let numberButton = document.querySelectorAll('#numbers button');
for (let i = 0; i < numberButton.length; i++) {
numberButton[i].addEventListener('click', buttonClick);
}

function clearScreen () {
  let current = "0";
  let test = document.querySelector('#answer')
  test.textContent = current;
 }

let clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearScreen);



/*button.onclick = function () {
	var inputVal1 = input1.value;
	var inputVal2 = input2.value;
	output.innerHTML = parseFloat(inputVal1) + parseFloat(inputVal2);
}*/
