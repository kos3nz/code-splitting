import React from "react";
import logo from "../logo.svg";

const Page1 = ({ onRouteChange }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Welcome to React!</h1>
      <p>This is page1.</p>
    </header>
    <div className="App-button">
      <button className="disabled">Page1</button>
      <button onClick={() => onRouteChange("page2")}>Page2</button>
      <button onClick={() => onRouteChange("page3")}>Page3</button>
    </div>
  </div>
);

export default Page1;
