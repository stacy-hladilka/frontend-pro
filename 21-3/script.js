const image = document.getElementById("image");
let currentImgIndex = 1;
changeImage(currentImgIndex);

const prevButtonContainer = document.getElementById("prev-button-container");
const nextButtonContainer = document.getElementById("next-button-container");
const prevButton = document.createElement("button");
const nextButton = document.createElement("button");
prevButton.innerText = "<";
nextButton.innerText = ">";
nextButtonContainer.appendChild(nextButton);

function changeImage(index) {
  image.src = `./images/${index}.jpeg`;
}

prevButton.addEventListener("click", () => {
  currentImgIndex--;
  changeImage(currentImgIndex);
  if (currentImgIndex === 1) {
    prevButtonContainer.innerHTML = "";
  } else {
    nextButtonContainer.appendChild(nextButton);
  }
});

nextButton.addEventListener("click", () => {
  currentImgIndex++;
  changeImage(currentImgIndex);
  if (currentImgIndex === 9) {
    nextButtonContainer.innerHTML = "";
  } else {
    prevButtonContainer.appendChild(prevButton);
  }
});
