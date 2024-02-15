console.log("welcome to the calculator");

// Functions to perform basic arithmetic operation
function add(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  if (num2 === 0) {
    return "It is 2024 and we still cannot devide by 0";
  }
  return num1 / num2;
}

const ref = {
  displayBtn: document.querySelector("#display"),
  clearBtn: document.querySelector("#clear"),
  deleteBtn: document.querySelector("#delete"),
  divideBtn: document.querySelector("#divide"),
  subtractBtn: document.querySelector("#subtract"),
  addBtn: document.querySelector("#add"),
  equalsBtn: document.querySelector("#equals"),
  multiplyBtn: document.querySelector("#multiply"),
  buttons: document.querySelector("#buttons"),
  decimalBtn: document.querySelector("#decimal"),
};

let displayValue = ""; //string
let privousValue = null;
let currentValue = null;
let operationValue = "";

ref.buttons.addEventListener("click", showOnDisplay);
ref.deleteBtn.addEventListener("click", deleteLastNumber);
ref.decimalBtn.addEventListener("click", inputDecimal);
document.addEventListener("keydown", keyboardControl);
ref.clearBtn.addEventListener("click", clearDisplay);

function handleOperation(operator) {
  if (
    ["+", "-", "*", "/"].includes(displayValue.slice(-1)) ||
    displayValue === ""
  ) {
    return;
  }
  handleEqual();
  operationValue = operator;
  privousValue = parseFloat(displayValue);
  updateValue(operator);
}

function handleEqual() {
  // Extracting the currentNumber from Display value
  let parts = displayValue.split(operationValue);
  let currentValue = parseFloat(parts[1]);

  if (isNaN(privousValue)) {
    return;
  } else if (isNaN(currentValue)) {
    return;
  } else if (operationValue === "") {
    return;
  } else {
    let result = operate(operationValue, privousValue, currentValue);

    displayValue = result.toString();

    ref.displayBtn.textContent = displayValue;
  }
}

// Function to perform operation based on operator and two numbers
function operate(operator, num1, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      return "Invalid operation";
  }
}

function updateValue(value) {
  displayValue += value;
  ref.displayBtn.textContent = displayValue;
}

function showOnDisplay(event) {
  if (displayValue.length >= 22) return;

  if (event.target.nodeName !== "BUTTON") return;

  const buttonValue = event.target.value;

  if (event.target.innerText === "AC" || event.target.innerText === "DEL") {
    return;
  }

  if (["+", "-", "*", "/"].includes(buttonValue)) {
    handleOperation(buttonValue);
    return;
  }

  if (buttonValue === "=") {
    handleEqual();
    return;
  }

  updateValue(buttonValue);
}

function onKeyBoardPress(event) {
  let keyBordValue = "";

  if (displayValue.length >= 22) {
    return;
  }

  switch (event.code) {
    case "Digit1": {
      keyBordValue = "1";
      displayValue += keyBordValue;
      ref.displayBtn.textContent = displayValue;
      break;
    }
    case "Digit2": {
      keyBordValue = "2";
      displayValue += keyBordValue;
      ref.displayBtn.textContent = displayValue;
      break;
    }
    case "Digit3": {
      keyBordValue = "3";
      displayValue += keyBordValue;
      ref.displayBtn.textContent = displayValue;
      break;
    }
    case "Digit4": {
      keyBordValue = "4";
      displayValue += keyBordValue;
      ref.displayBtn.textContent = displayValue;
      break;
    }
    case "Digit5": {
      keyBordValue = "5";
      displayValue += keyBordValue;
      ref.displayBtn.textContent = displayValue;
      break;
    }
    case "Digit6": {
      keyBordValue = "6";
      displayValue += keyBordValue;
      ref.displayBtn.textContent = displayValue;
      break;
    }
    case "Digit7": {
      keyBordValue = "7";
      displayValue += keyBordValue;
      ref.displayBtn.textContent = displayValue;
      break;
    }
    case "Digit8": {
      keyBordValue = "8";
      displayValue += keyBordValue;
      ref.displayBtn.textContent = displayValue;
      break;
    }
    case "Digit9": {
      keyBordValue = "9";
      displayValue += keyBordValue;
      ref.displayBtn.textContent = displayValue;
      break;
    }
    case "Digit0": {
      keyBordValue = "0";
      displayValue += keyBordValue;
      ref.displayBtn.textContent = displayValue;
      break;
    }
  }
}
function inputDecimal() {
  ref.decimalBtn.disabled = true;
  ref.decimalBtn.classList.add("disabled-hover");
}

function deleteLastNumber() {
  displayValue = displayValue.slice(0, -1);
  ref.displayBtn.textContent = displayValue;
  if (displayValue === "") {
    clearDisplay();
  }
  if (!displayValue.includes(".")) {
    ref.decimalBtn.disabled = false;
    ref.decimalBtn.classList.remove("disabled-hover");
  }
}

function clearDisplay() {
  displayValue = "";
  ref.displayBtn.textContent = "0";
  ref.decimalBtn.disabled = false;
  ref.decimalBtn.classList.remove("disabled-hover");
  privousValue = null;
  currentValue = null;
}

function backspaceBtnControl(event) {
  if (event.code === "Backspace") {
    deleteLastNumber();
    ref.decimalBtn.classList.remove("disabled-hover");
  }
}

function keyboardControl(event) {
  onKeyBoardPress(event);
  backspaceBtnControl(event);
}
