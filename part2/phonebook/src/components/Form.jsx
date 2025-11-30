


const Form = ({persons, setPersons, newName, newNumber, 
               handleNameAdd, handleNumberAdd, setNewName, 
               setNewNumber}) => {

const addPerson = (event) => {
    event.preventDefault()
    
    const newPerson = {
      name: newName,
      number: newNumber,
      id: String(persons.length + 1),
    }
    
    let findResults = undefined
    findResults = persons.find((person) => person.name === newPerson.name) 
    console.log("newName found in persons?: ", findResults === undefined)
    ^
    (findResults === undefined)
      ? (
          setPersons(persons.concat(newPerson)), 
          console.log({newName}, "will be added to the phonebook")
        )
      : (
          console.log({newName}, "already exists in the phonebook"),
            window.alert(`${newName} already exists in the phonebook`)
        )
    //console.log("New Person:", newPerson)
    //console.log("Persons:", persons)
    
    setNewNumber("")
    setNewName("")
  }


    return (
        <>
        <form onSubmit={addPerson}>
            <div>name: <input value={newName} onChange={handleNameAdd}/></div>
            <div>number: <input value={newNumber} onChange={handleNumberAdd}/></div>
            <button type="submit">add</button>
        </form>
        </>
        )
}

export default Form