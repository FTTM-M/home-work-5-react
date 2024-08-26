import React from "react";
import Icon from "./Icon";

export default function Forecastdate(props) {
  function maxtemp() {
    maxtemp = Math.round(props.data.temperature.maximum);
    return `{maxtemp}`;
  }
  function mintemp() {
    mintemp = Math.round(props.data.temperature.minimum);
    return `{mintemp}`;
  }

  return (
    <div>
      <div className="weatherforecast-day">Tue</div>

      <Icon spesific={props.data.condition.Icon} size={45} />

      <div className="weatherforecasr-temperature">
        <span className="weatherforecast-max">{maxtemp()}°</span>{" "}
        <span className="weatherforecast-min">{mintemp()}°</span>
      </div>
    </div>
  );
}
