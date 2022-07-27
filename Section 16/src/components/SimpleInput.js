import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
  const {
    value: name,
    valueInputIsInvalid: nameInputIsInvalid,
    enteredValueIsValid: enteredNameIsValid,
    enteredValueHandler: nameHandler,
    enteredValueBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: email,
    valueInputIsInvalid: emailInputIsInvalid,
    enteredValueIsValid: enteredEmailIsValid,
    enteredValueHandler: emailHandler,
    enteredValueBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput((value) => value.trim().includes("@"));

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const formHandler = (event) => {
    event.preventDefault();

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    console.log(name);
    console.log(email);

    resetName();
    resetEmail();
  };

  return (
    <form onSubmit={formHandler}>
      <div
        className={nameInputIsInvalid ? "form-control invalid" : "form-control"}
      >
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          onChange={nameHandler}
          value={name}
          onBlur={nameBlurHandler}
        />
        {nameInputIsInvalid && (
          <p className="error-text">Please enter a name</p>
        )}
      </div>

      <div
        className={
          emailInputIsInvalid ? "form-control invalid" : "form-control"
        }
      >
        <label htmlFor="email">Your E-mail</label>
        <input
          type="email"
          id="email"
          onChange={emailHandler}
          value={email}
          onBlur={emailBlurHandler}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Please enter an email</p>
        )}
      </div>

      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
