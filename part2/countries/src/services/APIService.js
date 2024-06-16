import axios from "axios";

const COUNTRIES_API_URL = "https://studies.cs.helsinki.fi/restcountries/api";
const API_KEY = import.meta.env.VITE_SOME_KEY;

async function getAllCountries() {
  return axios
    .get(`${COUNTRIES_API_URL}/all`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Failed to fetch countries:", error);
      return [];
    });
}

async function getCapitalCoordinates(country) {
  return axios
    .get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${country.capital[0]},${country.altSpellings[0]}&appid=${API_KEY}`
    )
    .then((response) => response.data)
    .catch((error) => {
      console.error("Failed to fetch coordinates:", error);
      return [];
    });
}

async function getWeather(country) {
    return getCapitalCoordinates(country).then((coordinates) => {
        if (coordinates.length === 0) {
        return {};
        }
    
        return axios
        .get(
            `http://api.openweathermap.org/data/2.5/weather?lat=${coordinates[0].lat}&lon=${coordinates[0].lon}&units=metric&appid=${API_KEY}`
        )
        .then((response) => response.data)
        .catch((error) => {
            console.error("Failed to fetch weather:", error);
            return {};
        });
    });
    }

export default { getAllCountries, getWeather };
