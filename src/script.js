function showTemperature(response) {
  console.log(response);
  console.log(response.data.main.temp);
  let temperatureElement = response.data.main.temp;
  let temperature = Math.round(temperatureElement);
  let temp = document.querySelector("#temperature");
  temp.innerHTML = `${temperature}`;
}
function changeCity(event) {
  event.preventDefault();

  let place = document.querySelector("#place");
  let city = document.querySelector("h1");
  city.innerHTML = `${place.value}`;

  let apiKey = "99b8f9330a1bfba3a85e523fd3c2e528";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${place.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

let searchCity = document.querySelector("#search-form");
let button = document.querySelector("#current-city");
button.addEventListener("click", getCurrentPosition);

function currentTemperature(current) {
  let h1 = document.querySelector("h1");
  h1.innerHTML = `${current.data.name}`;
  let temp = Math.round(current.data.main.temp);
  let temperature = document.querySelector("#temperature");
  temperature.innerHTML = `${temp}`;
}
function currentCity(current) {
  let apiKey = "99b8f9330a1bfba3a85e523fd3c2e528";
  let lat = current.coords.latitude;
  let lon = current.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(currentTemperature);
}

function getCurrentPosition() {
  navigator.geolocation.getCurrentPosition(currentCity);
}

function formatDate() {
  let now = new Date();
  let hour = now.getHours();
  if (hour < 10) {
    hour = `0${hour}`;
  }
  let minutes = now.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let date = now.getDate();
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
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let month = months[now.getMonth()];
  let currentDate = `${day} ${hour}:${minutes}</br> ${month} ${date}`;

  return currentDate;
}
let time = document.querySelector("#time");
time.innerHTML = formatDate();
