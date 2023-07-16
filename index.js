// Challenge 1
let now = new Date();
let currentDate = document.querySelector("#date");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let hours = now.getHours();
let minutes = now.getMinutes();
currentDate.innerHTML = `${day} ${hours}:${minutes}`;

// Challenge 2
function searchCity(event) {
  event.preventDefault();
  let searchTerm = document.querySelector("#city-input");
  let heading = document.querySelector("h1");
  heading.innerHTML = `${searchTerm.value}`;
}

let form = document.querySelector(".search-form");
form.addEventListener("submit", searchCity);

// Challenge 3
function showFTemperature(event) {
  let displayTemperature = document.querySelector(".temperature");
  displayTemperature.innerHTML = `66`;
}
let fahrenheit = document.querySelector("#fahrenheit-link");
fahrenheit.addEventListener("click", showFTemperature);

function showCTemperature(event) {
  let displayTemperature = document.querySelector(".temperature");
  displayTemperature.innerHTML = `19`;
}
let celsius = document.querySelector("#celsius-link");
celsius.addEventListener("click", showCTemperature);
