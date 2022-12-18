import React, { useState } from 'react'
import Form from './Form'

const WeatherPanel = () => {
    // let urlWeather = process.env.REACT_APP_URL_WEATHER
    let appId = '&appid=08424562fcb4922bef8d569c7205923f&lang=es'
    let urlWeather = 'https://api.openweathermap.org/data/2.5/weather?q='
    // let urlForecast = process.env.REACT_APP_URL_FORECAST
    let urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?q='
    // let urlCity = "&q"
    const [weather, setWeather] = useState([])
    const [forecast, setForecast] = useState([])
    const [loading, setLoading] = useState(false)
    const [show, setShow] = useState(false)
    const [location, setLocation] = useState("")

    const getLocation = async(loc) => {
        setLoading(true)
        setLocation(loc)

        urlWeather = urlWeather + loc + appId;

        await fetch(urlWeather).then((response) => {
            if (!response.ok) throw {response}
            return response.json()
        }).then((weatherData) => {
            console.log(weatherData);
            setWeather(weatherData)
        }).catch(error => {
            console.log(error);
            setLoading(false)
            setShow(false)
        })

        urlForecast = urlForecast + loc + appId;

        await fetch(urlForecast).then((response) => {
            if (!response.ok) throw {response}
            return response.json()
        }).then((forecastData) => {
            console.log(forecastData);
            setForecast(forecastData)
            setLoading(true)
            setShow(true)
        }).catch(error => {
            console.log(error);
            setLoading(false)
            setShow(false)
        })
        
    }
  return (
    <React.Fragment>
        <Form
            newLocation = {getLocation}
        />
    </React.Fragment>
  )
}

export default WeatherPanel