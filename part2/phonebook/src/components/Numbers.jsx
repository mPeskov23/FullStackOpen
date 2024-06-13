/* eslint-disable react/prop-types */
import Person from "./Person";

const Numbers = ({persons, searchTerm}) => {
    const filteredPersons = persons.filter((person) =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return (
        <div>
            {filteredPersons.map((person) => (
                <Person key={person.id} person={person} />
            ))}
        </div>
    )
}

export default Numbers;