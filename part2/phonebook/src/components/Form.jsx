const Form = ({addPerson, newName, newNumber, 
               handleNameAdd, handleNumberAdd}) => {

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