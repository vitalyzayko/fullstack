const ShowPerson = ({person, personToDelete}) => { 
  return (
    <p>
      {person.name} {person.number} 
      <button onClick={() => personToDelete(person.id) }> delete </button> 
    </p>
  )
}
export default ShowPerson