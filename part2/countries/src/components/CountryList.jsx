import CountryCard from "./CountryCard";
import Country from "./Country";

/* eslint-disable react/prop-types */
const CountryList = ({ filteredCountries = [] }) => {
    if (filteredCountries === undefined || filteredCountries.length === 0){
        return <p>No data</p>
    }
    if(filteredCountries.length === 1){
        return <CountryCard country={filteredCountries[0]} />
    }
    return (
        <div>
            {filteredCountries.length > 10 ? (
                <p>Too many matches, specify another filter</p>
            ) : (
                filteredCountries.map((country) => (
                    <Country key={country.name.common} country={country} />
                ))
            )}
        </div>
    );
}

export default CountryList;