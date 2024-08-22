import React from "react";
import "./App.css";
import Weather from "./weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
      </div>
      <div className="footer">
        coded by <a href="/">Fatemeh</a>, is open-sourced on{" "}
        <a href="/">GitHub</a> and hosted on <a href="/">Netlify</a>
      </div>{" "}
    </div>
  );
}

export default App;
