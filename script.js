const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const resultDiv = document.getElementById("weatherResult");

  if (!city) {
    resultDiv.innerHTML = "Please enter a city name.";
    return;
  }

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      const { name, main, weather } = data;
      resultDiv.innerHTML = `
        <h2>${name}</h2>
        <p>${weather[0].description}</p>
        <p>🌡️ Temperature: ${main.temp} °C</p>
        <p>💧 Humidity: ${main.humidity}%</p>
        <img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png" />
      `;
    })
    .catch(() => {
      resultDiv.innerHTML = "Error: Could not fetch weather data.";
    });
}
