console.log("Вивести на сторінку в один рядок через кому числа від 10 до 20.");
let firstBuffer = "";
for (let number = 10; number <= 20; number++) {
  const middleSymbol = firstBuffer === "" ? "" : ", ";
  firstBuffer = firstBuffer + middleSymbol + number;
}
console.log(firstBuffer);

console.log("Вивести квадрати чисел від 10 до 20.");
let secondBuffer = "";
for (let number = 10; number <= 20; number++) {
  const middleSymbol = secondBuffer === "" ? "" : ", ";
  secondBuffer = secondBuffer + middleSymbol + number * number;
}
console.log(secondBuffer);

console.log("Вивести таблицю множення на 7.");
let thirdBuffer = "";
for (let number = 1; number <= 10; number++) {
  const middleSymbol = thirdBuffer === "" ? "" : ", ";
  thirdBuffer = thirdBuffer + middleSymbol + `7 * ${number} = ${7 * number}`;
}
console.log(thirdBuffer);

console.log("Знайти суму всіх цілих чисел від 1 до 15.");
let fourthBuffer = 0;
for (let number = 1; number <= 15; number++) {
  fourthBuffer = fourthBuffer + number;
}
console.log(fourthBuffer);

console.log("Знайти добуток усіх цілих чисел від 15 до 35.");
let fifthBuffer = 1;
for (let number = 15; number <= 35; number++) {
  fifthBuffer = fifthBuffer * number;
}
console.log(fifthBuffer);

console.log("Знайти середнє арифметичне всіх цілих чисел від 1 до 500.");
let sixthBuffer = 0;
for (let number = 1; number <= 500; number++) {
  sixthBuffer = sixthBuffer + number;
}
console.log(sixthBuffer / 500);

console.log("Вивести суму лише парних чисел в діапазоні від 30 до 80.");
let seventhBuffer = 0;
for (let number = 30; number <= 80; number++) {
  if (number % 2 !== 0) {
    continue;
  }
  seventhBuffer = seventhBuffer + number;
}
console.log(`${seventhBuffer}`);

console.log("Вивести всі числа в діапазоні від 100 до 200 кратні 3.");
let eighthBuffer = "";
for (let number = 100; number <= 200; number++) {
  if (number % 3 !== 0) {
    continue;
  }
  const middleSymbol = eighthBuffer === "" ? "" : ", ";
  eighthBuffer = eighthBuffer + middleSymbol + number;
}
console.log(eighthBuffer);

console.log(
  "Дано натуральне число. Знайти та вивести на сторінку всі його дільники."
);
const naturalNumber = 534;
for (let number = 1; number <= naturalNumber; number++) {
  if (naturalNumber % number === 0) {
    console.log(`${naturalNumber} is divisible to ${number}`);
  }
}

console.log("Визначити кількість його парних дільників.");
let counter = 0;
for (let number = 1; number <= naturalNumber; number++) {
  if (naturalNumber % number === 0 && number % 2 === 0) {
    counter++;
  }
}
console.log(`The number of even divisors of ${naturalNumber} is ${counter}`);

console.log("Знайти суму його парних дільників.");
let counterSum = 0;
for (let number = 1; number <= naturalNumber; number++) {
  if (naturalNumber % number === 0 && number % 2 === 0) {
    counterSum = counterSum + number;
  }
}
console.log(counterSum);

console.log("Надрукувати повну таблицю множення від 1 до 10.");
for (let first = 1; first <= 10; first++) {
  let rowBuffer = "";
  for (let second = 1; second <= 10; second++) {
    const middleSymbol = rowBuffer === "" ? "" : ", ";
    rowBuffer =
      rowBuffer + middleSymbol + `${first} * ${second} = ${first * second}`;
  }
  console.log(rowBuffer);
}
