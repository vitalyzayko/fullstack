
import axios from "axios"
import ShowButton from "./ShowButton"
import { useEffect } from "react"
import ShowWeather from "./ShowWeather"

const ShowCountries = ({filteredList, setInput, api_key, weatherData, setWeather}) => {
    
    console.log("filteredList length: ", filteredList)
    console.log("api ", api_key)


    const getWeatherHook = (weatherUrl) => {
        
        
        useEffect(() => {
            console.log("get weather info from weather link:", weatherUrl)
            axios
            .get(weatherUrl)
            .then(response => {
                setWeather(response.data)
                console.log("got weather data for", weatherData)
            })
            .catch(error => {
                console.log("Error getting weather info:", error)
            })
        }, [])
        //return weatherData
        
    }

    if (!filteredList || filteredList.length === 0) {
        return (
            console.log("filtered list is undefined or empty"),
            <div> No such country, choose another filtering value </div>
        )
    }

    if (filteredList.length === 1) {

        console.log("filtered list length 1")
        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${filteredList[0].capital}&appid=${api_key}`

        getWeatherHook(weatherUrl)

        return (
            
            <div>
                <h2 className="countryName">{filteredList[0].name.common}</h2>
                <p>Capital: {filteredList[0].capital}</p>
                <p>Area: {filteredList[0].area}</p>
                <h3>Languages:</h3> 

                <ul>
                    {Object.values(filteredList[0].languages).map((language) => 
                        <li key={language}>{language}</li>
                    )}
                </ul>
                <img className="flag" src={filteredList[0].flags.svg} alt="flag" />
                <ShowWeather weatherData={weatherData} />
            </div>
        )  
    }   
    if (filteredList.length > 1 && filteredList.length <= 10) {
        return (
            console.log("filtered list length between 2 and 10"),
            <div> 
                <ul>
                    {filteredList.map((country) => 
                    <li key={`${country.name.ccn3}+${country.name.common}`}>
                        {country.name.common}     
                        <ShowButton name={country.name.common} setInput={setInput}/>
                    </li>)}
                </ul>    
            </div>
        )
    }
    if (filteredList.length > 10) {
        return (
            console.log("filtered list length > 10"),
            <div> Too many matches, specify another filter </div>
        )
    }
}

export default ShowCountries