const userBirthYear = prompt("Enter your year of birth");
const userLocation = prompt("Enter your location city");
const userSport = prompt("What is your favorite kind of sport?");

let birthMessage;
const userBirthYearInt = parseInt(userBirthYear);
if (userBirthYear === null) {
  birthMessage = "It's pity, you didn't enter your year of birth.";
} else if (
  isNaN(userBirthYearInt) ||
  userBirthYearInt > 2024 ||
  userBirthYearInt < 1900
) {
  birthMessage = "Invalid year of birth.";
} else {
  const currentYear = new Date().getFullYear();
  birthMessage = `Your age is ${currentYear - userBirthYearInt}.`;
}

let cityMessage;
switch (userLocation) {
  case null:
    cityMessage = "It's pity, you didn't enter your location city.";
    break;
  case "Kyiv":
    cityMessage = "You live in the capital of Ukraine!";
    break;
  case "Washington":
    cityMessage = "You live in the capital of the US!";
    break;
  case "London":
    cityMessage = "You live in the capital of the UK!";
    break;
  case "":
    cityMessage = "You live in some empty space.";
    break;
  default:
    cityMessage = `You live in ${userLocation}.`;
}
let sportMessage;
switch (userSport) {
  case null:
    sportMessage = "It's pity, you didn't enter your favorite kind of sport.";
    break;
  case "Swimming":
    sportMessage = "Do you want to be like Michael Phelps?";
    break;
  case "Tennis":
    sportMessage = "Do you want to be like Elina Svitolina?";
    break;
  case "High Jump":
    sportMessage = "Do you want to be like Yaroslava Mahuchikh?";
    break;
  case "":
    sportMessage = "You enjoy emptiness.";
    break;
  default:
    sportMessage = `${userSport} is a perfect choice!`;
}
alert(`${birthMessage} ${cityMessage} ${sportMessage}`);
