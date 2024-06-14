import { useState, useEffect } from "react";
import axios from "axios";
import FilterForm from "./components/FilterForm";
import SubmitForm from "./components/SubmitForm";
import Numbers from "./components/Numbers";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");

  const [newNumber, setNewNumber] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      setPersons(response.data);
    });
  }, []);

  const submitInfo = [
    newName,
    setNewName,
    newNumber,
    setNewNumber,
    persons,
    setPersons,
  ];

  return (
    <div>
      <h2>Search</h2>
      <FilterForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <h2>Add a number</h2>
      <SubmitForm submitInfo={submitInfo} />
      <h2>Numbers</h2>
      <Numbers persons={persons} searchTerm={searchTerm} />
    </div>
  );
};

export default App;
