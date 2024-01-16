const array = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];

console.log(
  "Дан масив [16,-37,54,-4,72,-56,47,4, -16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47] Знайти суму та кількість позитивних елементів."
);
function findAmountAndSum(elem) {
  if (elem > 0) {
    positiveSum += elem;
    positiveCounter++;
  }
}

let positiveSum = 0;
let positiveCounter = 0;
array.forEach(findAmountAndSum);
console.log(
  `sum of positive elements is equal to: ${positiveSum}; 
  amount of positive elements is equal to: ${positiveCounter};`
);

console.log("Знайти мінімальний елемент масиву та його порядковий номер.");
let minElement = array[0];
let minElementIndex = 0;
function findMinElementIndex(elem, index) {
  if (minElement > elem) {
    minElement = elem;
    minElementIndex = index;
  }
}
array.forEach(findMinElementIndex);
console.log(
  `min. element is: ${minElement}; 
  min. element index is: ${minElementIndex}`
);

console.log("Знайти максимальний елемент масиву та його порядковий номер.");
let maxElement = array[0];
let maxElementIndex = 0;
function findMaxElementIndex(elem, index) {
  if (maxElement < elem) {
    maxElement = elem;
    maxElementIndex = index;
  }
}
array.forEach(findMaxElementIndex);
console.log(
  `max. element is: ${maxElement}; 
  max. element index is: ${maxElementIndex}`
);

console.log("Визначити кількість негативних елементів.");
function findAmount(elem) {
  if (elem < 0) {
    negativeCounter++;
  }
}
let negativeCounter = 0;
array.forEach(findAmount);
console.log(`amount of negative elements is equal to: ${negativeCounter};`);

console.log("Знайти кількість непарних позитивних елементів.");
let oddNumberAmount = 0;
function findOddPositiveElementsNumber(elem) {
  if (elem % 2 !== 0 && elem > 0) {
    oddNumberAmount++;
  }
}
array.forEach(findOddPositiveElementsNumber);
console.log(`amount of odd positive elements is equal to: ${oddNumberAmount}`);

console.log("Знайти кількість парних позитивних елементів.");
let evenNumberAmount = 0;
function findEvenPositiveElementsNumber(elem) {
  if (elem % 2 === 0 && elem > 0) {
    evenNumberAmount++;
  }
}
array.forEach(findEvenPositiveElementsNumber);
console.log(
  `amount of even positive elements is equal to: ${evenNumberAmount}.`
);

console.log("Знайти суму парних позитивних елементів.");
let evenPositiveSum = 0;
function findEvenPositiveSum(elem) {
  if (elem % 2 === 0 && elem > 0) {
    evenPositiveSum = evenPositiveSum + elem;
  }
}
array.forEach(findEvenPositiveSum);
console.log(
  `the sum of even positive numbers is equal to: ${evenPositiveSum}.`
);

console.log("Знайти суму непарних позитивних елементів.");
let oddPositiveSum = 0;
function findOddPositiveSum(elem) {
  if (elem % 2 !== 0 && elem > 0) {
    oddPositiveSum = oddPositiveSum + elem;
  }
}
array.forEach(findOddPositiveSum);
console.log(`the sum of odd positive numbers is equal to: ${oddPositiveSum}.`);

console.log("Знайти добуток позитивних елементів.");
let positiveProduct = 1;
function findPositiveProduct(elem) {
  if (elem > 0) {
    positiveProduct = positiveProduct * elem;
  }
}
array.forEach(findPositiveProduct);
console.log(`the product of positive elements is equal to: ${positiveProduct}`);

console.log("Знайти найбільший серед елементів масиву, остальні обнулити.");
let biggestNumber = array[0];
function findBiggestNumber(elem) {
  if (biggestNumber < elem) {
    biggestNumber = elem;
  }
}
array.forEach(findBiggestNumber);
function setZeroFilledArr(elem) {
  if (elem === biggestNumber) {
    return elem;
  } else {
    return 0;
  }
}
const newArray = array.map(setZeroFilledArr);
console.log(
  `the biggest number is equal to: ${biggestNumber};
  resulting array is equal to: ${newArray}.`
);
