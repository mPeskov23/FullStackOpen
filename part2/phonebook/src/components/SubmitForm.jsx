import phonebookService from "../services/phonebookService";

/* eslint-disable react/prop-types */
const SubmitForm = (props) => {
  const [newName, setNewName, newNumber, setNewNumber, persons, setPersons, setMessage] =
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
    };
    if (persons.find((person) => person.name === newName)) {
      if (
        window.confirm(
          `${newName} is already added to the phonebook, replace the old number with a new one?`
        )
      ) {
        const existingPerson = persons.find((person) => person.name === newName);
        const changedPerson = { ...existingPerson, number: newNumber };
        phonebookService
          .update(existingPerson.id, changedPerson)
          .then((returnedPerson) => {
            setPersons(
              persons.map((person) =>
                person.id !== existingPerson.id ? person : returnedPerson
              )
            );
            setMessage(`Updated ${newName}`);
            setTimeout(() => {
              setMessage(null);
            }, 5000);
          });
      }
    } else {
      phonebookService.create(personObject).then((returnedPerson) => {
        setPersons(persons.concat(returnedPerson));
      });
      setMessage(`Added ${newName}`);
      setTimeout(() => {
        setMessage(null);
      }, 5000);
    }
    setNewName("");
    setNewNumber("");
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
