import { useState } from "react";

const useInput = (validateValue) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [valueIsTouched, setValueIsTouched] = useState(false);

  const enteredValueIsValid = validateValue(enteredValue);
  const valueInputIsInvalid = !enteredValueIsValid && valueIsTouched;

  const enteredValueHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const enteredValueBlurHandler = () => {
    setValueIsTouched(true);
  };

  const reset = () => {
    setEnteredValue("");
    setValueIsTouched(false);
  };

  return {
    value: enteredValue,
    enteredValueIsValid,
    valueInputIsInvalid,
    enteredValueHandler,
    enteredValueBlurHandler,
    reset,
  };
};

export default useInput;
