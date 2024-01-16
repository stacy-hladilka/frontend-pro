console.log(
  "Вивести числа від 20 до 30 через пропуск, використовуючи крок 0,5 (20 20,5 21 21,5….)."
);
let firstBuffer = "";
for (let number = 20; number <= 30; number = number + 0.5) {
  const middleSymbol = firstBuffer === "" ? "" : " ";
  firstBuffer = firstBuffer + middleSymbol + number;
}
console.log(firstBuffer);

console.log(
  "Один долар коштує 27 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів."
);
let dollarBuffer = "";
for (let number = 10; number <= 100; number = number + 10) {
  const middleSymbol = dollarBuffer === "" ? "" : " ";
  dollarBuffer = dollarBuffer + middleSymbol + number * 27 + "UAH";
}
console.log(dollarBuffer);

console.log(
  "Дане ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N."
);
let thirdBuffer = "";
const firstInteger = 273;
for (let number = 1; number <= 100 && number ** 2 <= firstInteger; number++) {
  const middleSymbol = thirdBuffer === "" ? "" : " ";
  thirdBuffer = thirdBuffer + middleSymbol + number;
}
console.log(thirdBuffer);

console.log(
  "Дане ціле число. З'ясувати, чи є воно простим (простим називається число, більше 1, які не мають інших дільників крім 1 і себе)."
);
let counter = 0;
let isPrime;
const secondInteger = 433;
if (secondInteger <= 1) {
  isPrime = false;
} else {
  for (let number = 1; number <= secondInteger && counter <= 2; number++) {
    if (secondInteger % number !== 0) {
      continue;
    }
    counter++;
  }
  isPrime = counter === 2;
}

console.log(`${secondInteger} is ${isPrime ? "" : "not "}prime.`);

console.log(
  "Дане деяке число. Визначити, чи можна одержати це число шляхом зведення числа 3 у деякий ступінь. (Наприклад, числа 9, 81 можна отримати, а 13 - не можна)."
);
let isThreeInDegree;
let power;
const thirdNumber = 1 / 9;
if (thirdNumber <= 0) {
  isThreeInDegree = false;
} else if (thirdNumber === 1) {
  power = 0;
  isThreeInDegree = true;
} else if (thirdNumber < 1) {
  for (let number = 1; 3 ** -number >= thirdNumber; number++) {
    if (3 ** -number === thirdNumber) {
      isThreeInDegree = true;
      power = -number;
    }
  }
} else {
  for (let number = 1; 3 ** number <= thirdNumber; number++) {
    if (3 ** number === thirdNumber) {
      isThreeInDegree = true;
      power = number;
    }
  }
}

console.log(
  `${thirdNumber} ${
    isThreeInDegree ? "can" : "cannot"
  } be received by raising 3 to the power of ${power || "any number"} `
);
