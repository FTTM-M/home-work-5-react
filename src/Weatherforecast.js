import React, { useState, useEffect } from "react";
import "./Weatherforecast.css";
import axios from "axios";
import Forecastdate from "./forecastdate";

export default function Weatherforecast(props) {
  let [forecastbeready, setForecastbeready] = useState(false);
  let [forecastdetail, setforecastdetail] = useState(null);

  useEffect(() => {
    setForecastbeready(false);
  }, [props.coordinates]);

  function handleResponse(response) {
    setforecastdetail(response.data.daily);
    setForecastbeready(true);
  }

  if (forecastbeready) {
    return (
      <div className="row  weatherforecast">
        {forecastdetail.map(function (dailyforecast, index) {
          if (index < 5) {
            return (
              <div className="col weatherforecast-item" key={index}>
                <Forecastdate forecastdata={dailyforecast} />
              </div>
            );
          } else {
            return null;
          }
        })}
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
