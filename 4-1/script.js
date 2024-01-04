function askCalcAndShow() {
  const userAction = prompt(
    "What kind of calculations do you need to conduct(add, sub, mult, div)?"
  );
  if (
    userAction !== "add" &&
    userAction !== "sub" &&
    userAction !== "mult" &&
    userAction !== "div"
  ) {
    alert("You've entered wrong command");
    return;
  }
  const firstValue = prompt("Enter the first number");
  const firstInt = parseInt(firstValue);
  if (isNaN(firstInt)) {
    alert("Invalid first number");
    return;
  }
  const secondValue = prompt("Enter the second number");
  const secondInt = parseInt(secondValue);
  if (isNaN(secondInt)) {
    alert("Invalid second number");
    return;
  }
  switch (userAction) {
    case "add":
      alert(`${firstInt} + ${secondInt} = ${firstInt + secondInt}`);
      break;
    case "sub":
      alert(`${firstInt} - ${secondInt} = ${firstInt - secondInt}`);
      break;
    case "mult":
      alert(`${firstInt} * ${secondInt} = ${firstInt * secondInt}`);
      break;
    case "div":
      alert(`${firstInt} / ${secondInt} = ${firstInt / secondInt}`);
      break;
  }
}
askCalcAndShow();
