const firstString = prompt("Enter first number") || "0";
const secondString = prompt("Enter second number") || "0";

const firstInt = parseInt(firstString);
const secondInt = parseInt(secondString);

alert(`${firstInt} + ${secondInt} = ${firstInt + secondInt}`);
alert(`${firstInt} - ${secondInt} = ${firstInt - secondInt}`);
alert(`${firstInt} * ${secondInt} = ${firstInt * secondInt}`);
alert(`${firstInt} / ${secondInt} = ${firstInt / secondInt}`);
