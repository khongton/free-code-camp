var operators = [];
var operands = [];
var MAX_LENGTH = 9;
var runVal = "";

function pressKey(key, output) {
  var value = $("#" + key).text(), operatorPressed = 0, numObj;
  var display = document.querySelector("#" + output);
  //allow computer to understand multiplication
  if (value === 'x')
    value = '*';
  
  //Handle a zero-point decimal
  if (runVal === "" && value === '.')
    runVal = "0";
  
  //filter math expressions as per Shunting Yard Algorithm
  if(/[\+\-\*\/]/.test(value)) {    
    //Handle situation if user presses same operator multiple times  
    if ( !(operators.length >= 1 && (value === operators[operators.length - 2] || value === operators[operators.length - 1])) ) {
      operators.push(value);
      operatorPressed = 1;
    }
  }
  else  {
    if (runVal === "" && value === '0') 
      display.textContent = '0';
    else {
      runVal += value;
      display.textContent = runVal;
    }
  }
  
  //Make previous iteration of runVal a number, reset fornext input
  if (operatorPressed && runVal != "") {
    numObj = runVal;
    operands.push(numObj);
    runVal = "";
    operatorPressed = 0;
  }
}

function clearAll(output) {
  var display = document.querySelector("#" + output);
  operators = [];
  operands = [];
  runVal = "";
  display.textContent = '0';
}

function clearEntry(output) {
  var display = document.querySelector("#" + output);
  runVal = "";
  display.textContent = '0';
}

function invert(output) {
  var display = document.querySelector("#" + output);
  runVal = "-" + runVal;
  display.textContent = runVal;
}

function percent(output) {
  var display = document.querySelector("#" + output);
  runVal = operands[0] * (runVal/100);
}

function divisionByZero(output) {
  var display = document.querySelector("#" + output);
  display.textContent = "Error";
  operators = [];
  operands = [];
  runVal = "";
}

function calculateTotal(output) {
  var display = document.querySelector("#" + output);
  var total, operator, termA, termB;
  
  //Flush any remaining input into operands array
  if (runVal != "") {
    var numObj = runVal;
    operands.push(numObj);
    runVal = "";
  }
   
  //Parse and evaluate expressions using Shunting Yard Algorithm
  while (operands.length > 1) {
    operator = operators.shift();
    termA = operands.shift();
    termB = operands.shift();
   
    switch (operator) {
      case "+":
        total = parseFloat(termA) + parseFloat(termB);
        if (total.toString().length > MAX_LENGTH)
          total = total.toPrecision(MAX_LENGTH).toString();
        operands.unshift(total);
        break;
      case "-":
        total = termA - termB;
        if (total.toString().length > MAX_LENGTH)
          total = total.toPrecision(MAX_LENGTH);
        operands.unshift(total);
        break;
      case "*":
        total = termA * termB;
        if (total.toString().length > MAX_LENGTH)
          total = total.toPrecision(MAX_LENGTH).toString();
        operands.unshift(total);
        break;
      case "/":
        total = termA / termB;
        if (total.toString().length > MAX_LENGTH)
          total = total.toPrecision(MAX_LENGTH);
        operands.unshift(total);
        break;
    }
    display.textContent = operands;
  }
}
