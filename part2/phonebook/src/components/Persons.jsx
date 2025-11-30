import ShowPerson from "./ShowPerson"

const Persons = ({persons, filterInput}) => {

    const checkInputInPersonsList = (person, input) => {
    const nameLower = person.name.toLowerCase()
    const inputLower = input.toLowerCase()
    
    return nameLower.includes(inputLower)
  }

  const filteredList = persons.filter((person) => checkInputInPersonsList(person, filterInput))
    

    return (
        <div>
          {filteredList.map(person => 
            <ShowPerson key={person.id} name={person.name} number={person.number}/>
          )}
        </div>
    )
}

export default Persons



