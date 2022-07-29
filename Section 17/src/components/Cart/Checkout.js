import classes from "./Checkout.module.css";
import useInput from "../../hooks/input-hook";

const Checkout = (props) => {
  const {
    value: name,
    inputIsValid: nameIsValid,
    inputIsInvalid: nameIsInvalid,
    inputHandler: nameHandler,
    blurHandler: blurNameHandler,
    resetHandler: resetNameHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: street,
    inputIsValid: streetIsValid,
    inputIsInvalid: streetIsInvalid,
    inputHandler: streetHandler,
    blurHandler: blurStreetHandler,
    resetHandler: resetStreetHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: postalCode,
    inputIsValid: postalCodeIsValid,
    inputIsInvalid: postalCodeIsInvalid,
    inputHandler: postalCodeHandler,
    blurHandler: blurPostalCodeHandler,
    resetHandler: resetPostalCodeHandler,
  } = useInput((value) => value.trim().length === 5);

  const {
    value: city,
    inputIsValid: cityIsValid,
    inputIsInvalid: cityIsInvalid,
    inputHandler: cityHandler,
    blurHandler: blurCityHandler,
    resetHandler: resetCityHandler,
  } = useInput((value) => value.trim() !== "");

  let formIsValid = false;
  if ((nameIsValid, streetIsValid, postalCodeIsValid, cityIsValid)) {
    formIsValid = true;
  }

  const formHandler = (event) => {
    event.preventDefault();

    const enteredName = name;
    const enteredStreet = street;
    const enteredPostalCode = postalCode;
    const enteredCity = city;

    const orderData = {
      name: enteredName,
      street: enteredStreet,
      postalCode: enteredPostalCode,
      city: enteredCity,
    };

    if (!formIsValid) {
      return;
    }

    props.submitDataHandler(orderData);

    resetNameHandler();
    resetStreetHandler();
    resetPostalCodeHandler();
    resetCityHandler();
  };

  return (
    <form onSubmit={formHandler} className={classes.form}>
      <div className={`${classes.control} ${nameIsInvalid && classes.invalid}`}>
        <label htmlFor="name">Project Name</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={nameHandler}
          onBlur={blurNameHandler}
        />
        {nameIsInvalid && <p>Please enter name of Your project.</p>}
      </div>

      <div
        className={`${classes.control} ${streetIsInvalid && classes.invalid}`}
      >
        <label htmlFor="street">React components affected:</label>
        <input
          type="text"
          id="street"
          value={street}
          onChange={streetHandler}
          onBlur={blurStreetHandler}
        />
        {streetIsInvalid && <p>Please enter a name of the component.</p>}
      </div>

      <div
        className={`${classes.control} ${
          postalCodeIsInvalid && classes.invalid
        }`}
      >
        <label htmlFor="postal">Project code:</label>
        <input
          type="text"
          id="postal"
          value={postalCode}
          onChange={postalCodeHandler}
          onBlur={blurPostalCodeHandler}
        />
        {postalCodeIsInvalid && <p>Please enter a 5-digit code.</p>}
      </div>

      <div className={`${classes.control} ${cityIsInvalid && classes.invalid}`}>
        <label htmlFor="city">JSX elements affected:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={cityHandler}
          onBlur={blurCityHandler}
        />
        {cityIsInvalid && <p>Please enter a valid element.</p>}
      </div>

      <div className={classes.actions}>
        <button type="button" onClick={props.hideCartHandler}>
          Cancel
        </button>
        <button disabled={!formIsValid}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
