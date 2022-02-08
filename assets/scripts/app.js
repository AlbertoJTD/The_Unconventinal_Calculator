const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = []; // Array

// Gets input form input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// Generates and write calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber){
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`
  outputResult(currentResult, calcDescription); // From vendor file
}

function writeToLog(operationIndentifier, prevResult, operationNumber, newResult){
  const logEntry = { //Object
    operation: operationIndentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };

  logEntries.push(logEntry)
  console.log(logEntries)
}

function calculateResult(calculationType) {
  const enteredNumber = getUserNumberInput();

  if (calculationType !== 'ADD' && calculationType !== 'SUBTRACT' && calculationType !== 'MULTIPLY' && calculationType !== 'DIVIDE' || !enteredNumber){
    return;
  }

  const initialResult = currentResult;
  let mathOperator;

  if (calculationType === 'ADD') {
    currentResult  += enteredNumber;
    mathOperator = '+';
  } else if (calculationType === 'SUBTRACT') {
    currentResult  -= enteredNumber;
    mathOperator = '-';
  } else if (calculationType === 'MULTIPLY') {
    currentResult  *= enteredNumber;
    mathOperator = 'x';
  } else {
    currentResult  /= enteredNumber;
    mathOperator = '/';
  }

  createAndWriteOutput(mathOperator, initialResult, enteredNumber);
  writeToLog(calculationType, initialResult, enteredNumber, currentResult);
}

// It does the sum of two numbers
function addTwoNumbers() {
  calculateResult('ADD');
}

function subtract() {
  calculateResult('SUBTRACT');
}

function multiply() {
  calculateResult('MULTIPLY');
}

function divide() {
  calculateResult('DIVIDE');
}


//Event listener
addBtn.addEventListener('click', addTwoNumbers);
subtractBtn.addEventListener('click',subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);