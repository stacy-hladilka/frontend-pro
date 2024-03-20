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
const productInfo = document.getElementById("product-info");
const categoriesContainer = document.getElementById("categories-container");
const form = document.getElementById("form");

const productsClickHandler = (product) => {
  productInfo.innerHTML = "";

  const h4Element = document.createElement("h4");
  const paragraphElement = document.createElement("p");
  const buttonElement = document.createElement("button");
  h4Element.innerText = product.title;
  paragraphElement.innerText = product.price;
  buttonElement.innerText = "Buy";
  buttonElement.addEventListener("click", () => {
    buyClickHandler(product);
  });
  productInfo.appendChild(h4Element);
  productInfo.appendChild(paragraphElement);
  productInfo.appendChild(buttonElement);
};

const categoriesClickHandler = (category) => {
  const productsContainer = document.getElementById("products-container");
  productsContainer.innerHTML = "";
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

categories.forEach((elem) => {
  const liElement = document.createElement("li");
  liElement.innerText = elem.title;
  liElement.addEventListener("click", () => {
    categoriesClickHandler(elem);
  });
  categoriesContainer.appendChild(liElement);
});

const buyClickHandler = (product) => {
  productInfo.innerHTML = "";
  const formClone = form.cloneNode(true);
  formClone.id = "form-clone";
  productInfo.appendChild(formClone);
  formClone.style.display = "flex";

  formClone.addEventListener("submit", (e) => onSubmit(e, product));
};

const onSubmit = (e, product) => {
  e.preventDefault();
  const formClone = document.getElementById("form-clone");
  const productsContainer = document.getElementById("products-container");
  const nameSurnameInput = document.getElementById("name-surname-input");
  const cityInput = document.getElementById("city-input");
  const novapostInput = document.getElementById("novapost-input");
  const paymentInput = document.querySelector('input[name="payment"]:checked');
  const amountInput = document.getElementById("amount-input");
  const commentInput = document.getElementById("comment-input");
  if (
    !nameSurnameInput?.value ||
    !cityInput?.value ||
    !novapostInput?.value ||
    !paymentInput?.value ||
    !amountInput?.value ||
    !commentInput?.value
  ) {
    alert("Insufficient amount of data! Please fill each field of the form!");
  } else if (amountInput.value > 5 || amountInput.value < 1) {
    alert("The amount of ordered products is invalid!");
  } else {
    alert(
      `Hello, ${nameSurnameInput.value}!\nWe provide you with your order details: ${product.title}(${product.price} for each product), ordered quantity is ${amountInput.value}.\nDelivery info: ${cityInput.value}, post-office: ${novapostInput.value}.\nThank you!`
    );
    productsContainer.innerHTML = "";
    productInfo.innerHTML = "";
    formClone.reset();
  }
};
