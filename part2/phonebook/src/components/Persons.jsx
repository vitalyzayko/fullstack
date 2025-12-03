import ShowPerson from "./ShowPerson"


const Persons = ({persons, filterInput, personToDelete}) => {

    const checkInputInPersonsList = (person, input) => {
    const nameLower = person.name.toLowerCase()
    const inputLower = input.toLowerCase()
    
    return nameLower.includes(inputLower)
  }

  const filteredList = persons.filter((person) => checkInputInPersonsList(person, filterInput))
    
  return (
        <div>
          {filteredList.map(person => {
            return (
              <ShowPerson key={person.id} person={person} personToDelete={personToDelete}/>
            )}
          )}
        </div>
    )
}

export default Persons



