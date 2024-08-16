import React from "react";
import "./weather.css";

export default function weather() {
  return (
    <div className="weather">
      {" "}
      <from>
        <div className="row">
          <div className="col-6">
            {" "}
            <input type="search" placeholder="Enter a city..."></input>
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-primary"
            ></input>
          </div>
        </div>
      </from>
      <div>
        New york
        <ul>
          <li>Wednesday</li>
          <li>Mostly Cloudy</li>
        </ul>
      </div>{" "}
    </div>
  );
}
