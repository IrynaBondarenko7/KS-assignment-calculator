console.log("welcome to the calculator");

// Functions to perform basic arithmetic operation
function add(num1,num2){
  return num1+num2;
}
function subtract(num1,num2){
  return num1-num2;
}
function multiply(num1,num2){
  return num1*num2;
}
function divide(num1,num2){
  if(num2===0){
      return "Error"
  }
  return num1/num2;
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
};

let displayValue = ""; //string

ref.buttons.addEventListener("click", showOnDisplay);
document.addEventListener("keydown", onKeyBoardPress);

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

function showOnDisplay(event) {
  if (event.target.nodeName !== "BUTTON") return;

  const buttonValue = event.target.value;

  if (
    buttonValue === "-" ||
    buttonValue === "+" ||
    buttonValue === "/" ||
    buttonValue === "*" ||
    buttonValue === "="
  ) {
    return;
  }
  if (displayValue.length >= 22) {
    return;
  }
  displayValue += buttonValue;
  ref.displayBtn.textContent = displayValue;
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
