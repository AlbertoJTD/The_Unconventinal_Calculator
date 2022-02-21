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

function calculate(operation) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let operator;

  if (operation === 'ADD') {
    currentResult += enteredNumber;
    operator = '+';
  } else if (operation === 'SUBTRACT') {
    currentResult -= enteredNumber;
    operator = '-';
  } else if (operation === 'MULTIPLY') {
    currentResult *= enteredNumber;
    operator = '*';
  } else {
    currentResult /= enteredNumber;
    operator = '/';
  }

  createAndWriteOutput(operator, initialResult, enteredNumber);
  writeToLog(operation, initialResult, enteredNumber, currentResult);
}


//Event listener
addBtn.addEventListener('click', calculate.bind(this, 'ADD'));
subtractBtn.addEventListener('click', calculate.bind(this, 'SUBTRACT'));
multiplyBtn.addEventListener('click', calculate.bind(this, 'MULTIPLY'));
divideBtn.addEventListener('click', calculate.bind(this, 'DIVIDE'));
