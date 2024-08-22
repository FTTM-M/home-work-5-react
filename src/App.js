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
        coded by <a href="https://github.com/FTTM-M">Fatemeh</a>, is
        open-sourced on{" "}
        <a href="https://github.com/FTTM-M/home-work-5-react">GitHub</a> and
        hosted on <a href="https://www.netlify.com/">Netlify</a>
      </div>{" "}
    </div>
  );
}

export default App;
