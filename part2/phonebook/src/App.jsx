import {useState, useEffect} from 'react'
import Persons from './components/Persons'
import Form from './components/Form'
import Filter from './components/Filter'
import personsService from "./services/persons"
import Notification from './components/Notification'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")
  const [filterInput, setFilterInput] = useState("")
  const [errorMessage, setErrorMessage] = useState([null, 0])


  const personToDelete = id => {
      
    (window.confirm("Do you want to delete the person?") === true) 
      ? (
        personsService
        .del(id)
        .then(result => {
          console.log("result.data:", result)
          setPersons(persons.filter(p => p.id !== id))
        })
        .catch(error => {
          //console.log("Error Deleting", error )
          setErrorMessage([`Information about person with id="${id}" has been already deleted`, 0])
            setTimeout(() => {
              setErrorMessage([null, 0])
            }, 5000)  
          
        })
      ) 
      : 
        {}
       
          
  }

  const addPerson = (event) => {
    event.preventDefault()
    
    const newPerson = {
      name: newName,
      number: newNumber,
    }
    
    //let findResults = undefined
    let findResults = persons.find((person) => person.name === newPerson.name) 
    //console.log("newName found in persons?: ", findResults === undefined)

    if (findResults === undefined) 
      {
        personsService
          .create(newPerson)
          .then(returnedPerson => {
            setPersons(persons.concat(returnedPerson))
            setErrorMessage([`Person "${newPerson.name}" has been sucessfully added`, 1])
            setTimeout(() => {
              setErrorMessage([null, 0])
            }, 5000)
          })
        console.log({newName}, "will be added to the phonebook")
      } 
    else 
    {  
      const updatedPerson = {...findResults, number: newNumber}
      //console.log(newName, "already exists in the phonebook. Do you want his number to be replaced")
        
      if (window.confirm(`${newName} already exists in the phonebook. Do you want his number to be replaced`) === true) {
        personsService
          .update(updatedPerson.id, updatedPerson)
          .then((returnedPerson) => {
            setPersons(persons.map(person => person.id === returnedPerson.id ? updatedPerson : person))
            setErrorMessage([`Phone number of "${updatedPerson.name}" has been sucessfully changed`, 1])
            setTimeout(() => {
              setErrorMessage([null, 0])
            }, 5000)
          
          })
          .catch(error => {
            setErrorMessage([`Information about "${updatedPerson.name}" has been already deleted`, 0])
            setTimeout(() => {
              setErrorMessage([null, 0])
            }, 5000)
            //console.log("in catch part")
          })
      } 
    }
    
    setNewNumber("")
    setNewName("")
  }


  const handleFilterInput = (event) => {
    //console.log(event.target.value)
    setFilterInput(event.target.value)
    //console.log("setting Filter Input:", filterInput) 
  }

  const handleNameAdd = (event) => {
    //console.log(event.target.value)
    setNewName(event.target.value) 
  }

  const handleNumberAdd = (event) => {
    //console.log(event.target.value)
    setNewNumber(event.target.value) 
  }

  useEffect(() => {
    personsService
      .getAll()
      .then(initialList => {
        setPersons(initialList)
      })
  },[])

  
  return (
    <div>
      <Notification message={errorMessage}/>
      <h2>Phonebook:</h2>
      <Filter value={filterInput} onChange={handleFilterInput}/>
      <h3>Add a new:</h3>  
      <Form addPerson={addPerson} newName={newName} 
            newNumber={newNumber} handleNameAdd={handleNameAdd} 
            handleNumberAdd={handleNumberAdd}/>
      <h3>Numbers</h3>
      <Persons persons={persons} filterInput={filterInput} personToDelete={personToDelete} />
    </div>
  )
}

export default App