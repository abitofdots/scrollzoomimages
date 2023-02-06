import React, { useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import { render } from "./three";

function App() {
  useEffect(() => {
    render();
  }, []);
  return <div className=""></div>;
}

export default App;
