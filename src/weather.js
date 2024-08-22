import React, { useState } from "react";
import axios from "axios";
import Forsearch from "./Forsearch";

import { RotatingLines } from "react-loader-spinner";
import "./weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function HandleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      date: new Date(response.data.time * 1000),
      temperature: Math.round(response.data.temperature.current),
      city: response.data.city,
      description: response.data.condition.description,
      wind: response.data.wind.speed,
      humidity: response.data.temperature.humidity,
      alt: response.data.condition.icon,
      iconUrl: response.data.condition.icon,
    });
  }
  function Handlesubmit(event) {
    event.preventDefault();
    SearchCity();
  }

  function HandleForCity(event) {
    setCity(event.target.value);
  }

  function SearchCity() {
    const apiKey = "7e0t14a370o3b9095a4ff16f06c1bee0";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;
    axios.get(apiUrl).then(HandleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <div className="whole">
          <form onSubmit={Handlesubmit}>
            <div className="formMargin row">
              <div className="col-9">
                {" "}
                <input
                  className="search"
                  type="search"
                  placeholder="Enter a city..."
                  onChange={HandleForCity}
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
          <Forsearch data={weatherData} />{" "}
        </div>
      </div>
    );
  } else {
    SearchCity();
    return (
      <div className="loader-container">
        <RotatingLines
          visible={true}
          height="200"
          width="200"
          strokeColor="rgb(9, 96, 107)"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{ display: "block" }}
          wrapperClass=""
        />
      </div>
    );
  }
}
