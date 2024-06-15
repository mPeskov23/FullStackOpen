import axios from "axios";

const COUNTRIES_API_URL = "https://studies.cs.helsinki.fi/restcountries/api";

async function getAllCountries(){
  return axios
    .get(`${COUNTRIES_API_URL}/all`)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Failed to fetch countries:", error);
      return [];
    });
}

export default { getAllCountries };
