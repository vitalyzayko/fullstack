
const Filter = ({value, onChange}) => {
    console.log("Filter Input (Filer Comp):", value)
    console.log("handle FI:", onChange)
    return (
        <div>
            filter shown with: <input value={value} onChange={onChange}/>
        </div>
    )
}

export default Filter