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

  if (loadingData) {
    return <Spinner />;
  }

  if (showData) {
    url = "https://openweathermap.org/img/w/";
    iconUrl = url + weather.weather[0].icon + ".png";
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
                <div className="card-body text-start mt-2">
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
                <hr />
                
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
