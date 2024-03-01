const imgContainer = document.getElementById("img-container");
const randomIndex = Math.round(Math.random() * 8 + 1);
const newImg = document.createElement("img");
newImg.src = `./images/${randomIndex}.jpeg`;
imgContainer.appendChild(newImg);
