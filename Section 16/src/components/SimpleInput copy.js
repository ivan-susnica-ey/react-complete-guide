import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameIsTouched, setNameIsTouched] = useState(false);
  // const [formIsValid, setFormIsValid] = useState(false);

  const [email, setEmail] = useState("");
  const [emailIsTouched, setEmailIsTouched] = useState(false);

  const enteredNameIsValid = name.trim() !== "";
  // da imamo 2 inputa bila bi jos 1 const za entered age pa bi to bio drugi dependancy u useEffect-u
  const nameInputIsInvalid = !enteredNameIsValid && nameIsTouched;

  const enteredEmailIsValid = email.trim() !== "" && email.trim().includes("@");
  const emailInputIsInvalid = !enteredEmailIsValid && emailIsTouched;

  let formIsValid = false;

  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true;
  }

  // useEffect(() => {
  //   if (enteredNameIsValid) {
  //     setFormIsValid(true);
  //   } else {
  //     setFormIsValid(false);
  //   }
  // }, [enteredNameIsValid]);

  const nameHandler = (event) => {
    setName(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const nameBlurHandler = () => {
    setNameIsTouched(true);
  };
  const emailBlurHandler = () => {
    setEmailIsTouched(true);
  };

  const formHandler = (event) => {
    event.preventDefault();
    setNameIsTouched(true);
    setEmailIsTouched(true);

    if (!enteredNameIsValid || !enteredEmailIsValid) {
      return;
    }

    console.log(name);
    console.log(email);

    setName("");
    setEmail("");

    setNameIsTouched(false);
    setEmailIsTouched(false);
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
