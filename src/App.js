import "./App.css";

import React, { useState } from "react";

const App = () => {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState("");

  const API_KEY = "0da6e147c448d44651a3b4bfaadda1e9"; // Replace with your OpenWeatherMap API key

  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a city name.");
      setWeatherData(null);
      return;
    }

    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();

      if (response.ok) {
        setWeatherData(data);
        setError("");
      } else {
        setError(data.message);
        setWeatherData(null);
      }
    } catch (err) {
      setError("An error occurred while fetching the weather data.");
      setWeatherData(null);
    }
  };

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      fetchWeather();
    }
  };

  return (
    <div className="app">
      <h1>Weather App</h1>
      <div className="search">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={fetchWeather}>Search</button>
      </div>
      {error && <p className="error">{error}</p>}
      {weatherData && (
        <div className="weather-info">
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
          <img
            src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
            alt={weatherData.weather[0].description}
          />
        </div>
      )}
    </div>
  );
};

export default App;
