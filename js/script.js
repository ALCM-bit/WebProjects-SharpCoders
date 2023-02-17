//Seleção dos elementos
const buttons = document.querySelectorAll("#buttons-container button");
const lastOperationText = document.querySelector("#last-operation");
const currentOperationText = document.querySelector("#current-operation");

class Calculator {
  constructor(lastOperationText, currentOperationText) {
    this.lastOperationText = lastOperationText;
    this.currentOperationText = currentOperationText;
    this.currentOperation = "";
  }

  //add digit to calculator screem
  addDigit(digit) {
    console.log(digit);
    //check if current operation have a dot
    if (digit === "." && this.currentOperationText.innerText.includes(".")) {
      return;
    }
    this.currentOperation = digit;
    this.updateScreen();
  }

  //Process all calculator operations
  processOperation(operation) {
    //check if current is empty
    if (this.currentOperationText.innerText === "" && operation !== "C") {
      //change operation
      if (this.lastOperationText.innerText !== "") {
        this.changeOperation(operation);
      }
      return;
    }
    //Get current and last value
    let operationValue;
    const previous = +this.lastOperationText.innerText.split(" ")[0];
    const current = +this.currentOperationText.innerText;

    switch (operation) {
      case "+":
        operationValue = previous + current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "-":
        operationValue = previous - current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "/":
        operationValue = previous / current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "*":
        operationValue = previous * current;
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "DEL":
        this.processDelOperator();
        break;
      case "CE":
        this.processClearCurrentOperation();
        break;
      case "C":
        this.processEqualOperator();
        break;
      case "=":
        this.processClearOperation();
        break;
      default:
        return;
    }
  }

  //change values of calculator screen

  updateScreen(
    operationValue = null,
    operation = null,
    current = null,
    previous = null
  ) {
    if (operationValue === null) {
      this.currentOperationText.innerText += this.currentOperation;
    } else {
      //checagem if value is zero, if it is just add current value
      if (previous === 0) {
        operationValue = current;
      }
      //add current value to previous
      this.lastOperationText.innerText = `${operationValue} ${operation}`;
      this.currentOperationText.innerText = "";
    }
  }

  // Change math operation
  changeOperation(operation) {
    const mathOPerations = ["+", "-", "/", "*"];

    if (!mathOPerations.includes(operation)) {
      return;
    }

    this.lastOperationText.innerText =
      this.lastOperationText.innerText.slice(0, -1) + operation;
  }

  //Delete the last digit
  processDelOperator() {
    this.currentOperationText.innerText = this.currentOperationText.slice(
      0,
      -1
    );
  }
  //Clear current operation
  processClearCurrentOperation() {
    this.currentOperationText.innerText = "";
  }

  // clear all operation
  processClearOperation() {
    this.currentOperationText.innerText = "";
    this.lastOperationText.innerText = "";
  }

  // Process an operation
  processEqualOperator() {
    const operation = lastOperationText.innerText.split(" ")[1];
    this.processOperation(operation);
  }
}

const calc = new Calculator(lastOperationText, currentOperationText);

//Eventos para a calculadora funcionar
buttons.forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const value = event.target.innerText;
    if (+value >= 0 || value === ".") {
      calc.addDigit(value);
    } else {
      calc.processOperation(value);
    }
  });
});
