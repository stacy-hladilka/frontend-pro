function removeElement(arrayArg, element) {
  if (!Array.isArray(arrayArg)) {
    return;
  }
  const elementIndex = arrayArg.indexOf(element);
  if (elementIndex === -1) {
    return;
  }
  arrayArg.splice(elementIndex, 1);
}

const array = [1, 2, 3, 4, 5, 6, 7];
removeElement(array, 5);
console.log(array);
