import useInput from "../hooks/use-input";

const BasicForm = (props) => {
  const {
    value: name,
    valueInputIsInvalid: nameInputIsInvalid,
    enteredValueIsValid: enteredNameIsValid,
    enteredValueHandler: nameHandler,
    enteredValueBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput((value) => value.trim() !== "");

  const {
    value: lastName,
    valueInputIsInvalid: lastNameInputIsInvalid,
    enteredValueIsValid: enteredLastNameIsValid,
    enteredValueHandler: lastNameHandler,
    enteredValueBlurHandler: lastNameBlurHandler,
    reset: resetLastName,
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
  if (enteredNameIsValid && enteredLastNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  const submitFormHandler = (event) => {
    event.preventDefault();

    //in case user enables the button with dev tools
    if (!formIsValid) {
      return;
    }

    console.log(name);
    console.log(lastName);
    console.log(email);

    resetName();
    resetLastName();
    resetEmail();
  };

  return (
    <form onSubmit={submitFormHandler}>
      <div className="control-group">
        <div
          className={
            nameInputIsInvalid ? "form-control invalid" : "form-control"
          }
        >
          <label htmlFor="name">First Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onBlur={nameBlurHandler}
            onChange={nameHandler}
          />
          {nameInputIsInvalid && (
            <p className="error-text">Please enter a name.</p>
          )}
        </div>
        <div
          className={
            lastNameInputIsInvalid ? "form-control invalid" : "form-control"
          }
        >
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onBlur={lastNameBlurHandler}
            onChange={lastNameHandler}
          />
          {lastNameInputIsInvalid && (
            <p className="error-text">Please enter a last name.</p>
          )}
        </div>
      </div>
      <div
        className={
          emailInputIsInvalid ? "form-control invalid" : "form-control"
        }
      >
        <label htmlFor="email">E-Mail Address</label>
        <input
          type="text"
          id="email"
          value={email}
          onBlur={emailBlurHandler}
          onChange={emailHandler}
        />
        {emailInputIsInvalid && (
          <p className="error-text">Please enter valid e-mail address</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </form>
  );
};

export default BasicForm;
