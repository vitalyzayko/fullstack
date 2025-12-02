import {useState, useEffect} from 'react'
import axios from "axios"
import Persons from './components/Persons'
import Form from './components/Form'
import Filter from './components/Filter'



const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState("")
  const [filterInput, setFilterInput] = useState("")

  const handleFilterInput = (event) => {
    console.log(event.target.value)
    setFilterInput(event.target.value)
    console.log("setting Filter Input:", filterInput) 
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
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
    }, [])

  return (
    <div>
      <h2>Phonebook:</h2>
      <Filter value={filterInput} onChange={handleFilterInput}/>
      <h3>Add a new:</h3>  
      <Form persons={persons} setPersons={setPersons} newName={newName} 
            newNumber={newNumber} handleNameAdd={handleNameAdd} 
            handleNumberAdd={handleNumberAdd} setNewName={setNewName} 
            setNewNumber={setNewNumber}/>
      <h3>Numbers</h3>
      <Persons persons={persons} filterInput={filterInput}/>
    </div>
  )
}

export default App