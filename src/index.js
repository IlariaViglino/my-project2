function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = capitalizeFirstLetter(searchInputElement.value);
}
function capitalizeFirstLetter(string) {
  string = string.replaceAll(" ", "");
  let firstLetter = string.charAt(0);
  firstLetter = firstLetter.toUpperCase();
  let remainder = string.slice(1).toLowerCase();
  return firstLetter + remainder;
}
function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

//temperature
function displayTemp(response) {
  let tempElement = document.querySelector(".current-temperature-value");
  tempElement.innerHTML = Math.round(response.data.temperature.current);
}

function currentTemp(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = capitalizeFirstLetter(searchInputElement.value);
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=do37btb04e66032f8eb1ab0493255777`;
  axios.get(apiUrl).then(displayTemp);
}
searchForm.addEventListener("submit", currentTemp);

//description

function displayDescription(response) {
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;
}

function currentDescription(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = capitalizeFirstLetter(searchInputElement.value);
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=do37btb04e66032f8eb1ab0493255777`;
  axios.get(apiUrl).then(displayDescription);
}
searchForm.addEventListener("submit", currentDescription);

//humidity
function displayHumidity(response) {
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.temperature.humidity;
}
function currentHumidity(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = capitalizeFirstLetter(searchInputElement.value);
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=do37btb04e66032f8eb1ab0493255777`;
  axios.get(apiUrl).then(displayHumidity);
}
searchForm.addEventListener("submit", currentHumidity);

//wind
function displayWind(response) {
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
}
function currentWind(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = capitalizeFirstLetter(searchInputElement.value);
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=do37btb04e66032f8eb1ab0493255777`;
  axios.get(apiUrl).then(displayWind);
}
searchForm.addEventListener("submit", currentWind);

//icon
function displayEmoji(response) {
  let emojiElement = document.querySelector(".current-temperature-icon");
  let url = response.data.condition.icon_url;
  emojiElement.innerHTML = `<img src=${url}>`;
}
function currentEmoji(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let city = capitalizeFirstLetter(searchInputElement.value);
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=do37btb04e66032f8eb1ab0493255777`;
  axios.get(apiUrl).then(displayEmoji);
}
searchForm.addEventListener("submit", currentEmoji);
