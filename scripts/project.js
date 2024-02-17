const fetchWeather = async () => {
    try {
        const locationInput = document.getElementById("locationInput").value.trim();
        if (locationInput === "") {
            throw new Error("Please enter a location.");
        }

        const apiUrl = `https://api.weatherapi.com/v1/current.json?key=901ebd6d54614e33a6e75038241702&q=${locationInput}`;
        console.log("API URL:", apiUrl); // Log API URL for debugging

        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log("API Response:", data); // Log API response for debugging

        if (response.ok) {
            // Update DOM with weather data
            updateWeatherInfo(data);
        } else {
            throw new Error(data.error.message);
        }
    } catch (error) {
        console.error("Error fetching weather data:", error.message);
        const weatherInfo = document.getElementById("weatherInfo");
        weatherInfo.innerHTML = `<p>${error.message}</p>`;
    }
};


const updateWeatherInfo = (data) => {
    const weatherInfo = document.getElementById("weatherInfo");
    weatherInfo.innerHTML = `
        <div class="weather-box">
            <h4>Temperature:</h4>
            <input type="text" id="temperature" name="temperature" value="${data.current.temp_f}°F" disabled>
        </div>
        <div class="weather-box">
            <h4>Weather:</h4>
            <input type="text" id="weatherCondition" name="weatherCondition" value="${data.current.condition.text}" disabled>
        </div>
        <div class="weather-box">
            <h4>Humidity:</h4>
            <input type="text" id="humidity" name="humidity" value="${data.current.humidity}%" disabled>
        </div>
        <div class="weather-box">
            <h4>Wind Speed:</h4>
            <input type="text" id="windSpeed" name="windSpeed" value="${data.current.wind_mph} mph" disabled>
        </div>
    `;
};
document.getElementById("getForecastButton").addEventListener("click", fetchWeather);