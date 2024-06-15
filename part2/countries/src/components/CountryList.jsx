/* eslint-disable react/prop-types */
const CountryList = ({ filteredCountries = [] }) => {
    if (filteredCountries === undefined || filteredCountries.length === 0){
        return <p>No data</p>
    }
    if(filteredCountries.length === 1){
        return (
            <div>
                <h1>{filteredCountries[0].name.common}</h1>
                <p>capital {filteredCountries[0].capital}</p>
                <p>area {filteredCountries[0].area}</p>
                <h2>languages</h2>
                <ul>
                    {Object.values(filteredCountries[0].languages).map((language) => (
                        <li key={language}>{language}</li>
                    ))}
                </ul>
                <img src={filteredCountries[0].flags.png} alt="flag" width="100px" />
            </div>
        );
    }
    return (
        <div>
            {filteredCountries.length > 10 ? (
                <p>Too many matches, specify another filter</p>
            ) : (
                filteredCountries.map((country) => (
                    <div key={country.name.common}>
                        {country.name.common}
                    </div>
                ))
            )}
        </div>
    );
}

export default CountryList;