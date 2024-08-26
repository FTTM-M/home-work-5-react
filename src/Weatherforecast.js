import React, { useState } from "react";
import "./Weatherforecast.css";
import axios from "axios";
import Forecastdate from "./forecastdate";
import Icon from "./Icon";

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
        <Forecastdate data={forecastdetail} />
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
