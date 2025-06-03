# Weather App - Real-Time Weather Dashboard


A responsive weather dashboard that provides real-time weather data for any city worldwide using the OpenWeather API. Built with HTML, CSS, and JavaScript.

## Features

- 🌍 **City Search**: Get weather data for any global city
- 🌡️ **Real-time Metrics**: Current temperature in °C and weather conditions
- ☀️ **Weather Descriptions**: Clear sky, rain, clouds, etc.
- 🚨 **Error Handling**: User-friendly error messages
- 📱 **Responsive Design**: Works on all device sizes
- 🌓 **Dynamic Backgrounds**: Changes based on weather conditions

## Technologies Used

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Flexbox, Grid, and responsive design
- **JavaScript (ES6)**: Async/Await, DOM manipulation

### API
- **OpenWeatherMap API**: Real-time weather data


## Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari)
- Internet connection
- OpenWeather API key (free tier available)

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/abuhurera-ansari/Weather-Project.git
   ```
2. Navigate to project directory:
   ```bash
   cd weather-app
   ```
3. Obtain an API key from [OpenWeatherMap](https://openweathermap.org/api)
4. Add your API key to `script.js`:
   ```javascript
   const API_KEY = "your_api_key_here";
   ```
5. Open `index.html` in your browser

## Project Structure

```
weather-app/
├── index.html          # Main HTML file
├── style.css           # Stylesheet
├── script.js           # JavaScript functionality
├── assets/             # Images/icons
│   ├── sunny.svg
│   ├── rainy.svg
│   └── cloudy.svg
└── README.md           # This documentation
```

## Code Highlights

### API Integration
```javascript
async function fetchWeatherData(city) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
  
  const response = await fetch(url);
  
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || "City not found");
  }
  
  return await response.json();
}
```

### Dynamic UI Update
```javascript
function displayWeatherData(data) {
  const { name, main, weather } = data;
  cityNameDisplay.textContent = name;
  temperatureDisplay.textContent = `Temperature: ${main.temp}°C`;
  descriptionDisplay.textContent = `Weather: ${weather[0].description}`;
  
  // Update background based on weather
  document.body.className = weather[0].main.toLowerCase();
}
```

### Error Handling
```javascript
function showError(error) {
  console.error("Fetch error:", error);
  errorMessage.textContent = error.message || "Failed to fetch weather data";
  weatherInfo.classList.add("hidden");
  errorMessage.classList.remove("hidden");
}
```

## Future Enhancements

- [ ] 5-day weather forecast
- [ ] Geolocation-based weather detection
- [ ] Temperature unit toggle (Celsius/Fahrenheit)
- [ ] Wind speed and humidity information
- [ ] Animated weather icons
- [ ] Local storage for recent searches

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a pull request

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Connect

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Connect-blue?style=flat&logo=linkedin)](https://linkedin.com/in/abuhurera-ansari)
[![GitHub](https://img.shields.io/badge/GitHub-Follow-blue?style=flat&logo=github)](https://github.com/abuhurera-ansari)
[![Twitter](https://img.shields.io/badge/Twitter-Follow-1DA1F2?style=flat&logo=twitter)](https://x.com/abuhureradotcom)

---

**Happy Coding!** ☀️🌧️❄️