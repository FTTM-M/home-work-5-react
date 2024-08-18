import React, { useState } from "react";
import axios from "axios";
import "./weather.css";

export default function Weather() {
  const [temperature, setTemperature] = useState(null);
  const [ready, setReady] = useState(false);

  function HandleResponse(response) {
    setTemperature(Math.round(response.data.temperature.current));
    setReady(true);
  }
  let city = "New York";
  const apiKey = "7e0t14a370o3b9095a4ff16f06c1bee0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}`;

  axios.get(apiUrl).then(HandleResponse);

  if (ready) {
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
          <div className="row  description">
            <div className="col-6">
              <div className="theCity">
                <h1> New york</h1>

                <ul>
                  <li>Wednesday</li>
                  <li>Mostly Cloudy</li>
                  <div className="temp">
                    <img
                      src="https://ssl.gstatic.com/onebox/weather/64/rain_light.png"
                      alt="weather"
                    ></img>
                    <span className="degree "> {temperature}</span>
                    <span className="celsius">°c </span>
                  </div>
                </ul>
              </div>
            </div>
            <div className="col-6 mt-5">
              <ul>
                <li>Precipitiation 15%</li>
                <li>Humidity 72%</li>
                <li>Wind 13 km/h</li>
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
