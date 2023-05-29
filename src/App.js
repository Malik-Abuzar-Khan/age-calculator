import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Form from "./components/form";

function App() {
  const [calculatedTime, setCalculatedTime] = useState({
    days: 0,
    months: 0,
    years: 0,
  });
  return (
    <div className="App">
      <div className="card_main_container">
        <Form setCalculatedTime={setCalculatedTime} />
        <h1>
          <span>{calculatedTime.years > 0 ? calculatedTime.years : "--"}</span>
          years
        </h1>
        <h1>
          <span>
            {calculatedTime.months > 0 ? calculatedTime.months : "--"}
          </span>{" "}
          months
        </h1>
        <h1>
          <span>{calculatedTime.days > 0 ? calculatedTime.days : "--"}</span>
          days
        </h1>
      </div>
    </div>
  );
}

export default App;
