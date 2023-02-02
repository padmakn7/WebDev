document.getElementById("num1").textContent=8;
document.getElementById("num2").textContent=2;
let num1=8;
let num2=2;
let resultEl = document.getElementById("result");


function add(){
  let sum = num1 + num2;
  resultEl.textContent = "Sum: " + sum;
}

function subtract(){
  let diff = num1 - num2;
  resultEl.textContent = "Difference: " + diff;
}

function multiply(){
  let prod = num1 * num2;
  resultEl.textContent = "Product: " + prod;
}


function divide(){
  let quotient = num1 / num2;
  resultEl.textContent ="Quotient: " + quotient;
}

