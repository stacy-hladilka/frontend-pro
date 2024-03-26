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

const mainSection = document.getElementById("main-section");
const productInfo = document.getElementById("product-info");
const categoriesContainer = document.getElementById("categories-container");
const form = document.getElementById("form");
const ordersButton = document.getElementById("orders-button");
const backButton = document.getElementById("back-button");
const ordersList = document.getElementById("orders-list");

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

    const orderKey = `${Date.now()}`;
    const orderData = {
      title: product.title,
      price: product.price,
      date: new Date().toISOString(),
      name: nameSurnameInput.value,
      amount: amountInput.value,
      city: cityInput.value,
      post: novapostInput.value,
    };
    localStorage.setItem(orderKey, JSON.stringify(orderData));

    productsContainer.innerHTML = "";
    productInfo.innerHTML = "";
    formClone.reset();
  }
};

ordersButton.addEventListener("click", () => {
  ordersButton.style.display = "none";
  backButton.style.display = "block";
  mainSection.style.display = "none";
  ordersList.style.display = "block";

  Object.keys(localStorage).forEach((orderItemKey) => {
    const orderItemString = localStorage[orderItemKey];
    const orderItem = JSON.parse(orderItemString);
    const listItem = document.createElement("li");
    listItem.innerText = `Product title: ${orderItem.title}; Product price: ${orderItem.price}; Order Date: ${orderItem.date}`;
    ordersList.appendChild(listItem);

    const removeButton = document.createElement("button");
    removeButton.innerText = "Remove Product";
    removeButton.className = "remove-button";
    listItem.appendChild(removeButton);
    removeButton.addEventListener("click", () => {
      ordersList.removeChild(listItem);
      localStorage.removeItem(orderItemKey);
    });

    let expanded = false;
    let orderDetails = document.createElement("p");
    orderDetails.innerText = `Customer name: ${orderItem.name}\nAmount of ordered product: ${orderItem.amount}\nDelivery destination city: ${orderItem.city}\nPost office: ${orderItem.post}`;

    listItem.addEventListener("click", () => {
      if (expanded === false) {
        listItem.appendChild(orderDetails);
        expanded = true;
      } else {
        listItem.removeChild(orderDetails);
        expanded = false;
      }
    });
  });
});

backButton.addEventListener("click", () => {
  mainSection.style.display = "flex";
  ordersList.style.display = "none";
  backButton.style.display = "none";
  ordersButton.style.display = "block";
  ordersList.innerHTML = "";
});
