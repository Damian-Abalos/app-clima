import React, { useState, useEffect } from "react";
import Card from "./Card";
import Form from "./Form";
import axios from "axios";

const WeatherPanel = () => {
  const appId = '08424562fcb4922bef8d569c7205923f';
  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const [location, setLocation] = useState("");
  const [weatherUrl, setWeatherUrl] = useState("");
  const [forecastUrl, setForecastUrl] = useState("");

  useEffect(() => {
    if (weatherUrl && forecastUrl) {
      // Realizar las solicitudes solo si tenemos las URL válidas
      fetchData(weatherUrl, forecastUrl);
    }
  }, [weatherUrl, forecastUrl]);

  const fetchData = async (weatherUrl, forecastUrl) => {
    try {
      setLoading(true);

      const [weatherResponse, forecastResponse] = await Promise.all([
        axios.get(weatherUrl),
        axios.get(forecastUrl)
      ]);

      const weatherData = weatherResponse.data;
      const forecastData = forecastResponse.data;

      setWeather(weatherData);
      setForecast(forecastData);
      setLoading(false);
      setShow(true);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setShow(false);
    }
  };

  const getLocation = (loc) => {
    setLocation(loc);
    setWeatherUrl(`https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${appId}`);
    setForecastUrl(`https://api.openweathermap.org/data/2.5/forecast?q=${loc}&appid=${appId}`);
  };

  return (
    <React.Fragment>
      <Form newLocation={getLocation} />
      <Card
        showData={show}
        loadingData={loading}
        weather={weather}
        forecast={forecast}
      />
    </React.Fragment>
  );
};

export default WeatherPanel;
