import { useState, useEffect } from "react";
import phonebookService from "./services/phonebookService";
import FilterForm from "./components/FilterForm";
import SubmitForm from "./components/SubmitForm";
import Numbers from "./components/Numbers";
import Notification from "./components/Notification";

const App = () => {
  const [persons, setPersons] = useState([]);

  const [newName, setNewName] = useState("");

  const [newNumber, setNewNumber] = useState("");

  const [searchTerm, setSearchTerm] = useState("");

  const [message, setMessage] = useState(null);

  const [status, setStatus] = useState("");

  useEffect(() => {
    phonebookService.getAll().then((initialPersons) => {
      setPersons(initialPersons);
    });
  }, []);

  const submitInfo = [
    newName,
    setNewName,
    newNumber,
    setNewNumber,
    persons,
    setPersons,
    setMessage,
    setStatus
  ];

  return (
    <div>
      <Notification message={message} type={status} />
      <h2>Search</h2>
      <FilterForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <h2>Add a number</h2>
      <SubmitForm submitInfo={submitInfo} />
      <h2>Numbers</h2>
      <Numbers persons={persons} setPersons={setPersons} searchTerm={searchTerm} />
    </div>
  );
};

export default App;
