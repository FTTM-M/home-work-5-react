import React, { useState } from "react";
import "./Weatherforecast.css";
import axios from "axios";
import Forecastdate from "./forecastdate";

export default function Weatherforecast(props) {
  let [forecastbeready, setForecastbeready] = useState(false);
  let [forecastdetail, setforecastdetail] = useState(null);

  function handleResponse(response) {
    setforecastdetail(response.data.daily);
    setForecastbeready(true);
  }

  if (forecastbeready) {
    return (
      <div className="weatherforecast">
        <Forecastdate forecastdata={forecastdetail[0]} />
      </div>
    );
  } else {
    const apiKey = "7e0t14a370o3b9095a4ff16f06c1bee0";
    let lat = props.coordinates.latitude;
    let lon = props.coordinates.longitude;

    let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${lon}&lat=${lat}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
