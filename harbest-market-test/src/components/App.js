import React, { useState, useEffect } from "react";
import { Link, Route, Switch } from "react-router-dom";

import logo from "../images/logo.png";
import "../stylesheets/App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p></p>
      </header>
    </div>
  );
}

export default App;
