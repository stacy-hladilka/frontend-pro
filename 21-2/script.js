const categories = [
  {
    title: "Home appliances",
    products: [
      { title: "Dishwasher", price: "720$" },
      { title: "Heater", price: "150$" },
      { title: "Washing machine", price: "570$" },
    ],
  },
  {
    title: "Gaming equipment",
    products: [
      { title: "Headphones", price: "100$" },
      { title: "Keyboard", price: "50$" },
      { title: "Monitor", price: "1200$" },
    ],
  },
];

const buyClickHandler = () => {
  const productInfo = document.getElementById("product-info");
  productInfo.innerHTML = "";
  const productsContainer = document.getElementById("products-container");
  productsContainer.innerHTML = "";
  alert("The product is purchased! Thank you!");
};

const productsClickHandler = (product) => {
  const productInfo = document.getElementById("product-info");
  productInfo.innerHTML = "";
  const h4Element = document.createElement("h4");
  const paragraphElement = document.createElement("p");
  const buttonElement = document.createElement("button");
  h4Element.innerText = product.title;
  paragraphElement.innerText = product.price;
  buttonElement.innerText = "Buy";
  buttonElement.addEventListener("click", () => {
    buyClickHandler();
  });
  productInfo.appendChild(h4Element);
  productInfo.appendChild(paragraphElement);
  productInfo.appendChild(buttonElement);
};

const categoriesClickHandler = (category) => {
  const productsContainer = document.getElementById("products-container");
  productsContainer.innerHTML = "";
  const productInfo = document.getElementById("product-info");
  productInfo.innerHTML = "";
  category.products.forEach((product) => {
    const liElement = document.createElement("li");
    liElement.innerText = product.title;
    liElement.addEventListener("click", () => {
      productsClickHandler(product);
    });
    productsContainer.appendChild(liElement);
  });
};

const categoriesContainer = document.getElementById("categories-container");
categories.forEach((elem) => {
  const liElement = document.createElement("li");
  liElement.innerText = elem.title;
  liElement.addEventListener("click", () => {
    categoriesClickHandler(elem);
  });
  categoriesContainer.appendChild(liElement);
});
