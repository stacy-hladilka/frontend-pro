const signupForm = document.getElementById("signup-form");
const table = document.getElementById("table");
const nameSurnameCell = document.getElementById("name-surname-cell");
const birthDateCell = document.getElementById("birth-date-cell");
const genderCell = document.getElementById("gender-cell");
const cityCell = document.getElementById("city-cell");
const addressCell = document.getElementById("address-cell");
const languagesCell = document.getElementById("languages-cell");

signupForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const nameSurname = document.getElementById("name-surname-input");
  const birthDate = document.getElementById("birth-date-input");
  const gender = document.querySelector('input[name="genders"]:checked');
  const city = document.getElementById("city-input");
  const address = document.getElementById("address-input");
  const languages = document.querySelectorAll(
    'input[name="languages"]:checked'
  );
  const languagesArr = Array.from(languages);
  const languagesStr = languagesArr.map((language) => language.value).join(" ");
  nameSurnameCell.innerText = nameSurname?.value || "Anonymous";
  birthDateCell.innerText = birthDate?.value || "Unknown Date";
  genderCell.innerText = gender?.value || "Unknown Gender";
  cityCell.innerText = city?.value;
  addressCell.innerText = address?.value || "Unknown Address";
  languagesCell.innerText = languagesStr || "No Languages Selected";
  signupForm.style.display = "none";
  table.style.display = "flex";
});
