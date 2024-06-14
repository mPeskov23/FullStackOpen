import axios from "axios";

/* eslint-disable react/prop-types */
const SubmitForm = (props) => {
  const [newName, setNewName, newNumber, setNewNumber, persons, setPersons] =
    props.submitInfo;

  const changeNameForm = (event) => {
    setNewName(event.target.value);
  };

  const changeNumberForm = (event) => {
    setNewNumber(event.target.value);
  };

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1,
    };
    if (persons.find((person) => person.name === newName)) {
      alert(`${newName} is already added to phonebook`);
    } else {
      axios
        .post("http://localhost:3001/persons", personObject)
        .then((response) => {
          setPersons(persons.concat(response.data));
        });
      setNewName("");
      setNewNumber("");
    }
  };

  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={changeNameForm} />
      </div>
      <div>
        number: <input value={newNumber} onChange={changeNumberForm} />
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default SubmitForm;
