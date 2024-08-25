import React from "react";
import Icon from "./Icon";
import "./Weatherforecast.css";
import axios from "axios";

export default function Weatherforecast(props) {
  function handleResponse(response) {
    console.log(response.data.coordinates);
  }
  let lat = props.coordinates.latitude;
  let lon = props.coordinates.longitude;
  const apiKey = "7e0t14a370o3b9095a4ff16f06c1bee0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?lon=${lon}&lat=${lat}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="weatherforecast">
      <div className="weatherforecast-day">Tue</div>

      <Icon spesific={"clear-sky-day"} size={45} />

      <div className="weatherforecasr-temperature">
        <span className="weatherforecast-max">19</span>{" "}
        <span className="weatherforecast-min">10</span>
      </div>
    </div>
  );
}
