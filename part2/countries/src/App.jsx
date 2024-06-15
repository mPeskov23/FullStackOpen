import { useState, useEffect } from "react";
import APIService from "./services/APIService";
import CountryList from "./components/CountryList";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    const fetchCountries = async () => {
      const countriesData = await APIService.getAllCountries();
      setCountries(countriesData);
    };

    fetchCountries();
  }, []);

  const listCountries = (event) => {
    setSearch(event.target.value);
    setFilteredCountries(
      countries.filter((country) =>
        country.name.common.toLowerCase().includes(event.target.value.toLowerCase() ||
        country.name.official.toLowerCase().includes(event.target.value.toLowerCase())
      )
    )
    );
  }

  return (
    <div>
      find countries{" "}
      <input value={search} onChange={listCountries} />
      <CountryList filteredCountries={filteredCountries} />
    </div>
  );
};

export default App;
