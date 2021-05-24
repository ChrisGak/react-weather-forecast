import './App.css';
import WeeklyForecast from "./WeeklyForecast";
import PastForecast from "./PastForecast";
import React from "react";

function App() {
  return (
      <div className="awf-forecast">
        <WeeklyForecast/>
        <PastForecast/>
      </div>
  );
}

export default App;
