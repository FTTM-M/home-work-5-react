import React from "react";
import ForDate from "./getdate";
import Icon from "./Icon";

export default function Forsearch(props) {
  return (
    <div className="row  descript">
      <div className="col-6">
        <div className="theCity">
          <h1>{props.data.city}</h1>

          <ul>
            <li>
              <ForDate date={props.data.date} />
            </li>
            <li>{props.data.description}</li>
            <div className="temp">
              <Icon spesific={props.data.iconUrl} />

              <span className="degree "> {props.data.temperature}</span>
              <span className="celsius">°c </span>
            </div>
          </ul>
        </div>
      </div>
      <div className="col-6 mt-5">
        <ul>
          <li>Humidity: {props.data.humidity}%</li>
          <li>Wind: {props.data.wind} km/h</li>
        </ul>
      </div>
    </div>
  );
}
