const hoursString = prompt("Enter the amount of hours") || "0";

const hoursInt = parseInt(hoursString);
const secondsInt = hoursInt * 60 * 60;

alert(`${hoursInt} hours = ${secondsInt} seconds`);
