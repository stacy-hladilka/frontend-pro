function generateList(array) {
  const mainUl = document.createElement("ul");
  array.forEach((element) => {
    if (typeof element === "number") {
      const listItem = document.createElement("li");
      listItem.innerText = element;
      mainUl.appendChild(listItem);
    }
    if (Array.isArray(element)) {
      const listItem = document.createElement("li");
      const list = generateList(element);
      listItem.appendChild(list);
      mainUl.appendChild(listItem);
    }
  });
  return mainUl;
}

const mainSection = document.getElementById("main-section");

const myArr = [6, [3, 5, 8], [5758, 56, 1], 6, 8, [2, 467, 577]];
const result = generateList(myArr);
mainSection.appendChild(result);
