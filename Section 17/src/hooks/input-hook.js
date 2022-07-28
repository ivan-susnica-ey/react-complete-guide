import { useReducer } from "react";

const inputReducer = (state, action) => {
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

const useInput = (validation) => {
  const [input, dispatchInput] = useReducer(inputReducer, {
    value: "",
    isTouched: false,
  });

  const inputIsValid = validation(input.value);
  const inputIsInvalid = !inputIsValid && input.isTouched;

  const inputHandler = (event) => {
    dispatchInput({ type: "ADD", value: event.target.value });
  };
  const blurHandler = () => {
    dispatchInput({ type: "BLUR" });
  };
  const resetHandler = () => {
    dispatchInput({ type: "RESET" });
  };

  return {
    value: input.value,
    inputIsValid,
    inputIsInvalid,
    inputHandler,
    blurHandler,
    resetHandler,
  };
};

export default useInput;
