/* eslint-disable react/prop-types */
import Person from "./Person";

const Numbers = ({persons, setPersons, searchTerm}) => {
    const filteredPersons = persons.filter((person) =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return (
        <div>
            {filteredPersons.map((person) => (
                <Person key={person.id} person={person} setPersons={setPersons}/>
            ))}
        </div>
    )
}

export default Numbers;