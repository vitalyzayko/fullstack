const ShowButton = ({ name, setInput}) => {
    return <button onClick={() => setInput(name)}>  Show </button>
}
export default ShowButton