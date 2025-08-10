const apiKey = "c2ba0b72559f40b1936211430253105";
const baseUrl = "https://api.weatherapi.com/v1/current.json";

async function getWeather() {
    const city = document.getElementById("cityInput").value.trim();
    const errorMessage = document.getElementById("error");
    const weatherDisplay = document.getElementById("weatherDisplay");


    errorMessage.textContent = "";
    weatherDisplay.style.display = "none";
    weatherDisplay.innerHTML = "";

    if (!city) {
        errorMessage.textContent = "Please enter a city name.";
        return;
    } 
    try {
        const response = await fetch(
            `${baseUrl}?key=${apiKey}&q=${encodeURIComponent(city)}&aqi=no`
        );
        if (!response.ok) {
            throw new Error("City not found or API error");
        }

        const data = await response.json();
        const { location, current } = data;

        weatherDisplay.innerHTML = `
            <h2>${location.name}, ${location.country}</h2>
            <p>${location.localtime}</p>
            <img src="https:${current.condition.icon}" alt="${current.condition.text}" />
            <h3>${current.temp_c}°C - ${current.condition.text}</h3>
            <p><strong>Feels like:</strong> ${current.feelslike_c}°C</p>
            <p><strong>Humidity:</strong> ${current.humidity}%</p>
            <p><strong>Wind:</strong> ${current.wind_kph} km/h (${current.wind_dir})</p>
        `;

        weatherDisplay.style.display = "block";
    } catch (error) {
        errorMessage.textContent = error.message || "Something went wrong";
    }
}