const firstString = prompt("Enter first number") || "0";
const secondString = prompt("Enter second number") || "0";
const thirdString = prompt("Enter third number") || "0";

const firstInt = parseInt(firstString);
const secondInt = parseInt(secondString);
const thirdInt = parseInt(thirdString);

const arithmeticalMean = (firstInt + secondInt + thirdInt) / 3;

alert(
  `arithmetical mean of ${firstInt} , ${secondInt} , ${thirdInt} equals ${arithmeticalMean}`
);
