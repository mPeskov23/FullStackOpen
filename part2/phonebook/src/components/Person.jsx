/* eslint-disable react/prop-types */
import phonebookService from "../services/phonebookService";

const Person = ({ person, setPersons }) => {
const deleteUser = () => {
    if (window.confirm(`Delete ${person.name}?`)) {
    phonebookService.deleteUser(person.id);
    setPersons((persons) => persons.filter((p) => p.id !== person.id));
    }
  };

  return (
    <p>
      {person.name} {person.number} <button onClick={deleteUser}>Delete</button>
    </p>
  );
};

export default Person;