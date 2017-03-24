
//Number buttons

function numberClick (event) {
  let click = event.target;
  let calcInput = document.querySelector("#answer");
  calcInput.textContent = calcInput.textContent + click.textContent;
  let convertToInt = parseFloat(calcInput.textContent);
}

let numberButtons = document.querySelectorAll('#numbers button');
for (let i = 0; i < numberButtons.length; i++) {
numberButtons[i].addEventListener('click', numberClick);
}


//Operator buttons

function operatorClick (event) {
  let click = event.target
  let calcInput = document.querySelector("#answer");
  calcInput.textContent = calcInput.textContent + click.textContent;
  let convertToInt = parseFloat(calcInput.textContent);
}

let operatorButtons = document.querySelectorAll('.operators button');
for (let i = 0; i < operatorButtons.length; i++) {
operatorButtons[i].addEventListener('click', operatorClick);
}



function addition (event) {
  numberButtons

}

function subtraction () {

}

function multiply () {

}

function divide () {

}




//clear

function clearScreen () {
  let current = '';
  let test = document.querySelector('#answer')
  test.textContent = current;
 }

let clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearScreen);










/*
function numberClick (event) {
//var result = document.getElementById("answer")
let click = event.target.textContent;
let calcInput = document.querySelector("#answer");
calcInput.textContent = click;
}

function clear(){
    numberClick.value=null;
}

function one(){
    numberClick.value+=1;
}
function two(){
    result.value+=2;
}
function three(){
    result.value+=3;
}
function four(){
    result.value+=4;
}
function five(){
    result.value+=5;
}
function six(){
    result.value+=6;
}
function seven(){
    result.value+=7;
}
function eight(){
    result.value+=8;
}
function nine(){
    result.value+=9;
}
function zero(){
    result.value+=0;
}
function sub(){
    result.value+='-';
}
function add(){
    result.value+='+';
}
function mul(){
    result.value+='*';
}
function divide(){
    result.value+='/';
}
function equal(){

      result.value =eval(result.value);
  }
*/
