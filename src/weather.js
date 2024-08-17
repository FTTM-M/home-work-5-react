import React from "react";
import "./weather.css";

export default function weather() {
  return (
    <div className="weather">
      {" "}
      <form>
        <div className="formMargin row">
          <div className="col-9">
            {" "}
            <input
              className="search"
              type="search"
              placeholder="Enter a city..."
            ></input>
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="search"
              className="btn btn-primary"
            ></input>
          </div>
        </div>
      </form>
      <div className="row">
        <div className="col-6">
          <div className="theCity">
            New york
            <ul>
              <li>Wednesday</li>
              <li>Mostly Cloudy</li>
            </ul>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitiation 15%</li>
            <li>Humidity 72%</li>
            <li>Wind 13 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
