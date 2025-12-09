const ShowWeather = ({ weatherData }) => {
    
        return <div>
            <h3>Weather in {weatherData.name}</h3>
            <p>Temperature: { (weatherData.main.temp - 273.15).toFixed(2) } °C</p>
            <p>Wind: {weatherData.wind.speed} m/s</p>
            <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} alt="weather icon" />
        </div>
}

export default ShowWeather