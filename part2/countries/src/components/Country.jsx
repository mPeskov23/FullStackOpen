/* eslint-disable react/prop-types */
import CountryCard from "./CountryCard";
import { useState } from "react";

const Country = ({ country }) => {
    const [show, setShow] = useState(false);

    const showData = () => {
        setShow(!show);
    };
  if (show) {
    return (
      <div>
        <button onClick={showData}>hide</button>
        <CountryCard country={country} />
      </div>
    );
  } else {
    return (
      <div>
        <p>
          {country.name.common}{" "}
          <button onClick={showData}>show</button>
        </p>
      </div>
    );
  }
};

export default Country;
