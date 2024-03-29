import React from "react";
import Spinner from "./Spinner";

const Card = ({ loadingData, showData, weather, forecast }) => {
  let today = new Date();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getFullYear();
  let date = day + "/" + month + "/" + year;

  let url = "";
  let iconUrl = "";

  let iconUrl3 = "";
  let iconUrl6 = "";
  let iconUrl9 = "";

  let forecastDate3 = "";
  let forecastDate6 = "";
  let forecastDate9 = "";

  if (loadingData) {
    return <Spinner />;
  }

  if (showData) {
    url = "https://openweathermap.org/img/w/";
    iconUrl = url + weather.weather[0].icon + ".png";

    iconUrl3 = url + forecast.list[1].weather[0].icon + ".png";
    iconUrl6 = url + forecast.list[2].weather[0].icon + ".png";
    iconUrl9 = url + forecast.list[3].weather[0].icon + ".png";

    forecastDate3 =
      forecast.list[1].dt_txt.substring(8, 10) +
      "/" +
      forecast.list[1].dt_txt.substring(5, 7) +
      "/" +
      forecast.list[1].dt_txt.substring(0, 4) +
      " " +
      forecast.list[1].dt_txt.substring(11, 13);
    forecastDate6 =
      forecast.list[2].dt_txt.substring(8, 10) +
      "/" +
      forecast.list[2].dt_txt.substring(5, 7) +
      "/" +
      forecast.list[2].dt_txt.substring(0, 4) +
      " " +
      forecast.list[2].dt_txt.substring(11, 13);
    forecastDate9 =
      forecast.list[3].dt_txt.substring(8, 10) +
      "/" +
      forecast.list[3].dt_txt.substring(5, 7) +
      "/" +
      forecast.list[3].dt_txt.substring(0, 4) +
      " " +
      forecast.list[3].dt_txt.substring(11, 13);
  }

  return (
    <div className="mt-5 ">
      {showData === true ? (
        <div className="container">
          <div className="card mb-3 mx-auto bg-dark text-light">
            <div className="row g-0 ">
              <div className="col-md-4">
                <h3 className="card-title">{weather.name}</h3>
                <p className="card-date">{date}</p>
                <p className="card-desc">
                  <img src={iconUrl} alt="icon" />
                  {weather.weather[0].description}
                </p>
                <p className="card-temp">
                  {(weather.main.temp - 273.15).toFixed(1)}ºC
                </p>

                <img
                  src="https://images.pexels.com/photos/3551227/pexels-photo-3551227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  className="img-fluid rounded-start"
                  alt=""
                />
              </div>
              <div className="col-md-8">
                <div className="card-body text-start border-bottom">
                  <h5 className="card-text">
                    Temperatura máxima:{" "}
                    {(weather.main.temp_max - 273.15).toFixed(1)}ºC
                  </h5>
                  <h5 className="card-text">
                    Temperatura mínima:{" "}
                    {(weather.main.temp_min - 273.15).toFixed(1)}ºC
                  </h5>
                  <h5 className="card-text">
                    Sensación térmica:{" "}
                    {(weather.main.feels_like - 273.15).toFixed(1)}ºC
                  </h5>
                  <h5 className="card-text">
                    Humedad: {weather.main.humidity}%
                  </h5>
                  <h5 className="card-text">
                    Velocidad del viento: {weather.wind.speed} m/s
                  </h5>
                </div>
                <div className="card-body row my-auto">
                  <div className="col-md-4">
                    <p className="m-0">{forecastDate3}hs</p>
                    <img src={iconUrl3} alt="" />
                    <p className="description m-0">{forecast.list[1].weather[0].description}</p>
                    <p className="temp m-0">{(forecast.list[1].main.temp - 273.15).toFixed(1)}ºC</p>
                  </div>
                  
                  <div className="col-md-4">
                    <p className="m-0">{forecastDate6}hs</p>
                    <img src={iconUrl6} alt="" />
                    <p className="description m-0">{forecast.list[2].weather[0].description}</p>
                    <p className="temp m-0">{(forecast.list[2].main.temp - 273.15).toFixed(1)}ºC</p>
                  </div>
                  <div className="col-md-4">
                    <p className="m-0">{forecastDate9}hs</p>
                    <img className="m-0" src={iconUrl9} alt="" />
                    <p className="description m-0">{forecast.list[3].weather[0].description}</p>
                    <p className="temp m-0">{(forecast.list[3].main.temp - 273.15).toFixed(1)}ºC</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <h2 className="text-light">Sin datos</h2>
      )}
    </div>
  );
};

export default Card;
