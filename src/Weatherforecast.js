import React, { useState } from "react";
import Icon from "./Icon";
import "./Weatherforecast.css";
import axios from "axios";

export default function Weatherforecast(props) {
  let [forecastbeready, setForecastbeready] = useState(false);
  let [forecastdetail, setforecastdetail] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setForecastbeready(true);
    setforecastdetail(response.data.daily);
  }

  if (forecastbeready) {
    return (
      <div className="weatherforecast">
        <div className="weatherforecast-day">Tue</div>

        <Icon spesific={"clear-sky-day"} size={45} />

        <div className="weatherforecasr-temperature">
          <span className="weatherforecast-max">19°</span>{" "}
          <span className="weatherforecast-min">10°</span>
        </div>
      </div>
    );
  } else {
    let lat = props.coordinates.latitude;
    let lon = props.coordinates.longitude;
    const apiKey = "7e0t14a370o3b9095a4ff16f06c1bee0";
    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  return null;
}
