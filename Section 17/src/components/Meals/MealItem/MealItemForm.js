import classes from "./MealItemForm.module.css";
import Input from "../../UI/Input";

import { useRef } from "react";

const MealItemForm = (props) => {
  // const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value * 1;

    // if (
    //   amountInputRef.current.value === 0 ||
    //   enteredAmount > 1 ||
    //   enteredAmount > 5
    // ) {
    //   setAmountIsValid(false);
    //   return;
    // } BROWSER AUTOMATSKI IZBACUJE PREKO MIN I MAX KONTROLU BROJEVA

    props.addToCartHandler(enteredAmount);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
