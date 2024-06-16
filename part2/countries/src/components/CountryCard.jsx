/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import APIService from "../services/APIService";

const CountryCard = ({ country }) => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const weatherData = await APIService.getWeather(country);
        setWeather(weatherData);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeather();
  }, [country]);

  return (
    <div>
      <h1>{country.name.common}</h1>
      <p>capital {country.capital}</p>
      <p>area {country.area}</p>
      <h2>languages</h2>
      <ul>
        {Object.values(country.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={country.flags.png} alt="flag" width="200px" />
      
      <h2>Weather in {country.capital}</h2>
      {weather && weather.main ? (
        <div>
          <p>temperature: {weather.main.temp} Celsius</p>
          <img
            src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            alt="weather"
          />
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default CountryCard;
