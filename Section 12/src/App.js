import React, { useState, useCallback } from "react";
import Button from "./components/UI/Button/Button";

import DemoOutput from "./components/Demo/DemoOutput";

import "./App.css";

function App() {
  const [showP, setShowP] = useState(false);
  const [allowToggle, setAllowToggle] = useState(false);

  console.log("APP RUNNING");

  const toggleButtonHandler = useCallback(() => {
    if (allowToggle) {
      setShowP((prevState) => {
        return !prevState;
      });
    }
  }, [allowToggle]);

  const allowToggleHandler = () => {
    setAllowToggle(true);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      <DemoOutput show={showP} />
      <Button onClick={allowToggleHandler}>Allow Toggling!</Button>
      <Button onClick={toggleButtonHandler}>Toggle Paragraph!</Button>
    </div>
  );
}

export default App;
