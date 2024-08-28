import React from "react";
import Icon from "./Icon";

export default function Forecastdate(props) {
  function maxtemp() {
    let maximumtemp = Math.round(props.data.temperature.maximum);
    return maximumtemp;
  }
  function mintemp() {
    let minimumtemp = Math.round(props.data.temperature.minimum);
    return minimumtemp;
  }

  return (
    <div>
      <div className="weatherforecast-day">Tue</div>

      <Icon spesific={props.data.condition.icon} size={45} />

      <div className="weatherforecasr-temperature">
        <span className="weatherforecast-max">{maxtemp()}°</span>{" "}
        <span className="weatherforecast-min">{mintemp()}°</span>
      </div>
    </div>
  );
}
