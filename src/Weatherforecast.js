import React from "react";
import Icon from "./Icon";

export default function Weatherforecast(props) {
  return (
    <div className="weatherforecast">
      <div className="weatherforecast-day">Tue</div>
      <Icon spesific={props.data.iconUrl} />
      <div className="weatherforecasr-temperature">
        <span className="weatherforecast-max">19</span>{" "}
        <span className="weatherforecast-min">10</span>
      </div>
    </div>
  );
}
