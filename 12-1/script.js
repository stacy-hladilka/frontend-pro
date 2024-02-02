function contain(initSum) {
  let sum = initSum;
  return function (number) {
    sum = sum + number;
    return sum;
  };
}
let sumFunc = contain(3);
console.log(sumFunc(4));
console.log(sumFunc(3));
console.log(sumFunc(5));