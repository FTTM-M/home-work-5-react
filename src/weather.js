import React, { useState } from "react";
import axios from "axios";
import "./weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function HandleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      city: response.data.city,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      alt: response.data.condition.icon,
      iconUrl: response.data.condition.icon_url,
    });
  }

  const apiKey = "7e0t14a370o3b9095a4ff16f06c1bee0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apiKey}`;

  axios.get(apiUrl).then(HandleResponse);

  if (weatherData.ready) {
    return (
      <div className="weather">
        {" "}
        <div className="whole">
          <form>
            <div className="formMargin row">
              <div className="col-9">
                {" "}
                <input
                  className="search"
                  type="search"
                  placeholder="Enter a city..."
                ></input>
              </div>
              <div className="col-3">
                <input
                  type="submit"
                  value="search"
                  className="btn btn-primary"
                ></input>
              </div>
            </div>
          </form>
          <div className="row  descript">
            <div className="col-6">
              <div className="theCity">
                <h1>{weatherData.city}</h1>

                <ul>
                  <li>day</li>
                  <li>{weatherData.description}</li>
                  <div className="temp">
                    <img src={weatherData.iconUrl} alt={weatherData.icon}></img>
                    <span className="degree "> {weatherData.temperature}</span>
                    <span className="celsius">°c </span>
                  </div>
                </ul>
              </div>
            </div>
            <div className="col-6 mt-5">
              <ul>
                <li>Precipitiation: %</li>
                <li>Humidity: {weatherData.humidity}%</li>
                <li>Wind: {weatherData.wind} km/h</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return "loading...";
  }
}
