import { useReducer } from "react";

const inputStateReducer = (state, action) => {
  if (action.type === "ADD") {
    return {
      value: action.value,
      isTouched: state.isTouched,
    };
  }
  if (action.type === "BLUR") {
    return {
      value: state.value,
      isTouched: true,
    };
  }
  if (action.type === "RESET") {
    return {
      value: "",
      isTouched: false,
    };
  }
};

const useInput = (validateValue) => {
  const [inputState, dispatchInput] = useReducer(inputStateReducer, {
    value: "",
    isTouched: false,
  });

  const enteredValueIsValid = validateValue(inputState.value);
  const valueInputIsInvalid = !enteredValueIsValid && inputState.isTouched;

  const enteredValueHandler = (event) => {
    dispatchInput({ type: "ADD", value: event.target.value });
  };

  const enteredValueBlurHandler = () => {
    dispatchInput({ type: "BLUR" });
  };

  const reset = () => {
    dispatchInput({ type: "RESET" });
  };

  return {
    value: inputState.value,
    enteredValueIsValid,
    valueInputIsInvalid,
    enteredValueHandler,
    enteredValueBlurHandler,
    reset,
  };
};

export default useInput;
