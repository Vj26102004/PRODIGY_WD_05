const apiKey = '16b602e03ad6ac720c6d8b02ba7e530a';

function getWeatherByInput() {
    const location = document.getElementById('locationInput').value;
    if (location) {
        fetchWeatherData(location);
    } else {
        alert('Please enter a location');
    }
}

function fetchWeatherData(location) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => displayWeatherData(data))
        .catch(error => {
            console.error('Error fetching weather data:', error);
            alert('Failed to fetch weather data. Please try again later.');
        });
}

function displayWeatherData(data) {
    if (data.cod === 200) {
        document.getElementById('locationName').innerText = data.name;
        document.getElementById('temperature').innerText = `Temperature: ${data.main.temp} °C`;
        document.getElementById('description').innerText = `Description: ${data.weather[0].description}`;
    } else {
        alert('Location not found');
    }
}
