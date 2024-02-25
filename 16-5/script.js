class SuperMath {
  check(obj) {
    const isConfirmed = confirm(
      `Do you want to proceed the following calculation: ${obj.x} ${obj.znak} ${obj.y}?`
    );
    if (isConfirmed) {
      return this.doMath(obj.x, obj.znak, obj.y);
    } else {
      const newObj = this.input();
      if (!newObj) {
        console.log("Invalid input from user");
        return;
      }
      return this.doMath(newObj.x, newObj.znak, newObj.y);
    }
  }
  doMath(x, znak, y) {
    if (!["+", "-", "*", "/", "%", "ˆ"].includes(znak)) {
      return;
    }
    if (typeof x !== "number" || typeof y !== "number") {
      return;
    }

    switch (znak) {
      case "+":
        return x + y;
      case "-":
        return x - y;
      case "*":
        return x * y;
      case "/":
        return x / y;
      case "%":
        return x % y;
      case "ˆ":
        return x ** y;
      default:
        return;
    }
  }
  input() {
    const firstValue = prompt("Enter first number");
    if (firstValue === null) {
      alert("You've canceled.");
      return;
    }
    const firstNumber = parseFloat(firstValue);
    if (isNaN(firstNumber)) {
      alert("You've entered invalid number");
      return;
    }
    const sign = prompt("Enter math sign");
    if (sign === null) {
      alert("You've canceled.");
      return;
    }
    const secondValue = prompt("Enter second number");
    if (secondValue === null) {
      alert("You've canceled.");
      return;
    }
    const secondNumber = parseFloat(secondValue);
    if (isNaN(secondNumber)) {
      alert("You've entered invalid number");
      return;
    }

    return { x: firstNumber, znak: sign, y: secondNumber };
  }
}
const mathOperation = new SuperMath();
const resultOperation = mathOperation.check({ x: 4, znak: "%", y: 3 });
alert(resultOperation);
