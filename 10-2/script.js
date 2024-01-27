function power(number, degree) {
  if (degree === 0) {
    return 1;
  }
  if (degree > 0) {
    return number * power(number, degree - 1);
  } else {
    return (1 / number) * power(number, degree + 1);
  }
}

const firstResult = power(2, 3);
const secondResult = power(2, -3);
console.log(`2ˆ3 = ${firstResult};
2ˆ-3 = ${secondResult}`);
