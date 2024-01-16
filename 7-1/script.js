function createAndModifyArray() {
  const arrLength = prompt("Enter the quantity of array elements.");
  if (arrLength === null) {
    alert("You've canceled the operation.");
    return;
  }
  const arrLengthNumber = parseInt(arrLength);
  if (isNaN(arrLengthNumber) || arrLengthNumber <= 0) {
    alert("Invalid length.");
    return;
  }

  const array = new Array(arrLengthNumber);
  let index = 0;
  while (index < arrLengthNumber) {
    array[index] = prompt("Enter the array element");
    if (array[index] === null) {
      alert("You've canceled. Try again.");
    } else {
      index++;
    }
  }
  console.log(array);
  const arraySorted = array.toSorted();
  console.log(arraySorted);
  const arraySpliced = arraySorted.toSpliced(1, 3);
  console.log(arraySpliced);
}
createAndModifyArray();
