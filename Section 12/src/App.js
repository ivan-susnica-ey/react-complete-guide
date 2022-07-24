import React, { useState } from "react";
import Button from "./components/UI/Button/Button";

import DemoOutput from "./components/Demo/DemoOutput";

import "./App.css";

function App() {
  const [showP, setShowP] = useState(false);

  console.log("APP RUNNING");

  const toggleButtonHandler = () => {
    setShowP((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={false} />
      <Button onClick={toggleButtonHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
