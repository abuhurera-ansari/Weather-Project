document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const getWeatherButton = document.getElementById("get-weather-btn");
  const weatherInfo = document.getElementById("weather-info");
  const cityNameDisplay = document.getElementById("city-name");
  const temperatureDisplay = document.getElementById("temperature"); // Note: Spelling should be fixed in HTML
  const descriptionDisplay = document.getElementById("description");
  const errorMessage = document.getElementById("error-message");

  errorMessage.classList.add("hidden");

  const API_KEY = "b4898bec3cd3bcb0154d808ddfeb8b77";

  getWeatherButton.addEventListener("click", async () => {
    const city = cityInput.value.trim();
    if (!city) return;

    try {
      const weatherData = await fetchWeatherData(city);
      displayWeatherData(weatherData);
    } catch (error) {
      showError(error);
    }
  });

  async function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
      // Get error details from API response if available
      const errorData = await response.json();
      throw new Error(errorData.message || "City not found");
    }

    return await response.json();
  }

  function displayWeatherData(data) {
    const { name, main, weather } = data;
    cityNameDisplay.textContent = name;
    
    temperatureDisplay.textContent = `Temperature: ${main.temp}°C`;
    descriptionDisplay.textContent = `Weather: ${weather[0].description}`;

    weatherInfo.classList.remove("hidden");
    errorMessage.classList.add("hidden");
  }

  function showError(error) {
    console.error("Fetch error:", error);

    errorMessage.textContent = error.message || "Failed to fetch weather data";

    weatherInfo.classList.add("hidden");
    errorMessage.classList.remove("hidden");
  }
});
