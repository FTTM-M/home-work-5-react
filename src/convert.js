import React, { useState } from "react";

export default function Convert(props) {
  let finalTemperature;
  const [unit, setUnit] = useState("celsius");

  function Showfarenheit(event) {
    event.preventDefault();
    setUnit("farenheit");
  }

  function Showcelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function farenheitTemperature() {
    return Math.round((props.degreeoftemperature * 9) / 5 + 32);
  }

  if (unit === "celsius") {
    finalTemperature = props.degreeoftemperature;
  } else {
    finalTemperature = farenheitTemperature();
  }

  return (
    <span>
      <span className="degree "> {finalTemperature}</span>
      <span className="celsius">
        <a href="/" className="degreesign" onClick={Showcelsius}>
          °C
        </a>
        |
        <a href="/" className="farenheitdegree" onClick={Showfarenheit}>
          °F{" "}
        </a>
      </span>
    </span>
  );
}
