import React from "react";
import logo from "../logo.svg";

const Page3 = ({ onRouteChange }) => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <h1>Welcome to React!</h1>
      <p>This is page3.</p>
    </header>
    <div className="App-button">
      <button onClick={() => onRouteChange("page1")}>Page1</button>
      <button onClick={() => onRouteChange("page2")}>Page2</button>
      <button className="disabled">Page3</button>
    </div>
  </div>
);

export default Page3;
