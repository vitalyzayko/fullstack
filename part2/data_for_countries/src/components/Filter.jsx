
const Filter = ({value, onChange}) => {
    return (
        <div>
            Filter shown with: <input id="filter-input" value={value} onChange={onChange}/>
        </div>
    )
}
export default Filter