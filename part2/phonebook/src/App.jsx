import { useState } from "react";
import FilterForm from "./components/FilterForm";
import SubmitForm from "./components/SubmitForm";
import Numbers from "./components/Numbers";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456", id: 1 },
    { name: "Ada Lovelace", number: "39-44-5323523", id: 2 },
    { name: "Dan Abramov", number: "12-43-234345", id: 3 },
    { name: "Mary Poppendieck", number: "39-23-6423122", id: 4 },
  ]);
  const [newName, setNewName] = useState("");

  const [newNumber, setNewNumber] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const submitInfo = [newName, setNewName, newNumber, setNewNumber, persons, setPersons]

  return (
    <div>
      <h2>Search</h2>
      <FilterForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <h2>Add a number</h2>
      <SubmitForm submitInfo={submitInfo} />
      <h2>Numbers</h2>
      <Numbers persons={persons} searchTerm={searchTerm}/>
    </div>
  );
};

export default App;
