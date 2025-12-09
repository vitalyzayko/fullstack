import { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import ShowCountries from './components/ShowCountries'

const App = () => {
  const api_key = import.meta.env.VITE_SOME_KEY
  const [filterInput, setFilterInput] = useState('')
  const [allCountries, setAllCountries] = useState([])
  const [weatherData, setWeatherData] = useState(null)

  const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api/all"

  useEffect(() => {
    console.log("get all the countries from url: " + {baseUrl})
    axios
      .get(`${baseUrl}`)
      .then(response => {
        setAllCountries(response.data)
        console.log("got list of all countries, list size is ", allCountries.length)
      })
      .catch(error => {
        console.log("Error:", error)
      })
  }, [])
  
  const setInput = (value) => {
    setFilterInput(value)
  }

  const handleFilterInput = (event) => {
    setFilterInput(event.target.value)
  }

  const setWeather = (data) => {
    setWeatherData(data)
  }

  const checkFilterInput = (country, input) => {
    const nameLower = country.name.common.toLowerCase()
    const inputLower = input.toLowerCase()
    
    return nameLower.includes(inputLower)
  }

  const filteredList = allCountries.filter((country) => checkFilterInput(country, filterInput))

  return (
    <div>
      <h2>Start typing a country name...</h2>
      <Filter value={filterInput} onChange={handleFilterInput}/>
      <h2 className='ListTitle'>List of filtered countries</h2>
      <ShowCountries filteredList={filteredList} setInput={setInput} api_key={api_key} weatherData={weatherData} setWeather={setWeather} />
    </div>
  )
}

export default App