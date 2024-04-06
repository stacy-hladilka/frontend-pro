const form = document.getElementById("form");
const cityInput = document.getElementById("city-input");
const weatherContainer = document.getElementById("weather-container");

function addInfoRow(text) {
  const weatherInfo = document.createElement("p");
  weatherInfo.innerText = text;
  weatherContainer.appendChild(weatherInfo);
}

function addIcon(icon, description) {
  const iconContainer = document.createElement("div");
  iconContainer.className = "icon-container";

  const weatherIcon = document.createElement("img");
  const weatherDescription = document.createElement("span");

  weatherDescription.innerText = description;
  weatherIcon.src = `http://openweathermap.org/img/w/${icon}.png`;

  iconContainer.appendChild(weatherIcon);
  iconContainer.appendChild(weatherDescription);
  weatherContainer.appendChild(iconContainer);
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  weatherContainer.innerHTML = "";
  try {
    const fetchResult = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=metric&APPID=5d066958a60d315387d9492393935c19`
    );
    if (fetchResult.ok === false) {
      throw "error";
    }
    const resultObj = await fetchResult.json();

    addInfoRow(`City: ${resultObj.name};`);
    addInfoRow(`Temperature: ${resultObj.main.temp} C;`);
    addInfoRow(`Pressure: ${resultObj.main.pressure} hPa;`);
    resultObj.weather.forEach((element) => {
      addIcon(element.icon, element.description);
    });
    addInfoRow(`Humidity: ${resultObj.main.humidity} %;`);
    addInfoRow(
      `Wind-speed: ${resultObj.wind.speed} meter/sec; wind-degree: ${resultObj.wind.deg} deg`
    );
  } catch (error) {
    alert("Unknown error, try again later!");
  }
});
