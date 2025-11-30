import {useState} from 'react'
import Persons from './components/Persons'
import Form from './components/Form'
import Filter from './components/Filter'



const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 },
    { name: 'Vitaly Zayko', number: '39-24-62312122', id: 5 },
    { name: 'vitaly zaykov', number: '39-11-62133', id: 6 }
  ]) 
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