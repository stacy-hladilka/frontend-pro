console.log(
  "Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву."
);
function getAverageMean(array) {
  let sum = 0;
  let counter = 0;
  array.forEach(function (element) {
    if (typeof element !== "number") {
      return;
    } else {
      sum = sum + element;
      counter++;
    }
  });
  const average = sum / counter;
  return average;
}
const myArr = [2, "fggf", 14, "jmjhgb", 3, "ytuyjhty", 9, 7, "vcbftgf", 37, 15];
const result = getAverageMean(myArr);
console.log(`average mean of digits in array equals to ${result}`);

console.log(
  "Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача."
);
function doMath(x, znak, y) {
  if (!["+", "-", "*", "/", "%", "ˆ"].includes(znak)) {
    return;
  }
  if (typeof x !== "number" || typeof y !== "number") {
    return;
  }

  switch (znak) {
    case "+":
      return x + y;
    case "-":
      return x - y;
    case "*":
      return x * y;
    case "/":
      return x / y;
    case "%":
      return x % y;
    case "ˆ":
      return x ** y;
    default:
      return;
  }
}
function askAndDoMath() {
  const firstValue = prompt("Enter first number");
  if (firstValue === null) {
    alert("You've canceled.");
    return;
  }
  const firstNumber = parseFloat(firstValue);
  if (isNaN(firstNumber)) {
    alert("You've entered invalid number");
    return;
  }
  const sign = prompt("Enter math sign");
  if (sign === null) {
    alert("You've canceled.");
    return;
  }
  const secondValue = prompt("Enter second number");
  if (secondValue === null) {
    alert("You've canceled.");
    return;
  }
  const secondNumber = parseFloat(secondValue);
  if (isNaN(secondNumber)) {
    alert("You've entered invalid number");
    return;
  }
  const mathResult = doMath(firstNumber, sign, secondNumber);
  alert(`the result of Math calculation is: ${mathResult}`);
  console.log(`the result of Math calculation is: ${mathResult}`);
}
askAndDoMath();

console.log(
  "Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач."
);
function askAndCreate() {
  const mainArrLength = prompt("Enter the number of elements in main array");
  if (mainArrLength === null) {
    alert("You've canceled.");
    return;
  }
  const mainArrLengthNumber = parseInt(mainArrLength);
  if (isNaN(mainArrLengthNumber) || mainArrLengthNumber < 1) {
    alert("You've entered invalid number");
    return;
  }
  const mainArr = new Array(mainArrLengthNumber);
  for (let i = 0; i < mainArr.length; i++) {
    const secondaryArrLength = prompt(
      "Enter the number of elements in secondary array"
    );
    if (secondaryArrLength === null) {
      alert("You've canceled.");
      return;
    }
    const secondaryArrLengthNumber = parseInt(secondaryArrLength);
    if (isNaN(secondaryArrLengthNumber) || secondaryArrLengthNumber < 1) {
      alert("You've entered invalid number");
      return;
    }
    const secondaryArr = new Array(secondaryArrLengthNumber);
    for (let j = 0; j < secondaryArr.length; j++) {
      secondaryArr[j] = prompt(`Enter element № ${j} of array № ${i}`);
    }
    mainArr[i] = secondaryArr;
  }
  console.log(mainArr);
}
askAndCreate();

console.log(
  `Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.`
);
function removeSymbols(string, symbols) {
  let resultString = string;
  for (let i = 0; i < symbols.length; i++) {
    resultString = resultString.replace(symbols[i], "");
  }
  return resultString;
}
function askSymbols() {
  const chosenString = prompt("Enter the sentence");
  if (chosenString === null) {
    alert("You've canceled!");
    return;
  }
  const chosenSymbols = prompt("Enter symbols you'd like to remove");
  if (chosenSymbols === null) {
    alert("You've canceled!");
    return;
  }
  const symbolsArr = chosenSymbols.split("");
  const filteredString = removeSymbols(chosenString, symbolsArr);
  console.log(chosenString, symbolsArr, filteredString);
}
askSymbols();
