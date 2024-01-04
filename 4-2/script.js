function askUserData() {
  const userBirthYear = prompt("Enter your year of birth");
  if (userBirthYear === null) {
    alert("It's pity, you didn't enter your year of birth");
    return;
  }
  const userBirthYearInt = parseInt(userBirthYear);
  if (
    isNaN(userBirthYearInt) ||
    userBirthYearInt > 2024 ||
    userBirthYearInt < 1900
  ) {
    alert("Invalid year of birth");
    return;
  }
  const userLocation = prompt("Enter your location city");
  if (userLocation === null) {
    alert("It's pity, you didn't enter your location city");
    return;
  }
  const userSport = prompt("What is your favorite kind of sport?");
  if (userSport === null) {
    alert("It's pity, you didn't enter your favorite kind of sport");
    return;
  }
  const currentYear = new Date().getFullYear();
  const birthMessage = `Your age is ${currentYear - userBirthYearInt}.`;
  let cityMessage;
  switch (userLocation) {
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
}
askUserData();
