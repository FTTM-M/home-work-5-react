import React from "react";
import Icon from "./Icon";
import "./Weatherforecast.css";

export default function Weatherforecast(props) {
  return (
    <div className="weatherforecast">
      <div className="weatherforecast-day">Tue</div>
      <div className="iconforecast">
        <Icon spesific={"clear-sky-day"} size={45} />
      </div>
      <div className="weatherforecasr-temperature">
        <span className="weatherforecast-max">19</span>{" "}
        <span className="weatherforecast-min">10</span>
      </div>
    </div>
  );
}
