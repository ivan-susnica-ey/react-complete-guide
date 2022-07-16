import { useState } from "react";
import Button from "../../UI/Button";
import styles from "./UserForm.module.css";
import ErrorModal from "../../UI/ErrorModal";

const UserForm = (props) => {
  const [enteredName, setEnteredName] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [message, setMessage] = useState("");

  const [isValid, setIsValid] = useState(true);

  const nameAddHandler = (event) => {
    setEnteredName(event.target.value);
  };

  const ageAddHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setMessage("Plase enter a valid name and age (non-empty values)");
      setIsValid(false);
      return;
    }

    if (enteredAge < 0) {
      setMessage("Please enter a valid age (>0).");
      setIsValid(false);
      return;
    }

    const userData = {
      name: enteredName,
      age: enteredAge * 1,
    };

    props.addUser(userData);

    setEnteredName("");
    setEnteredAge("");
  };

  return (
    <>
      {!isValid && (
        <ErrorModal setIsValid={setIsValid}>
          <p>{message}</p>
        </ErrorModal>
      )}
      <form onSubmit={formSubmitHandler} className={styles.form}>
        <label>Username: </label>
        <input type="text" value={enteredName} onChange={nameAddHandler} />
        <label>Age: </label>
        <input type="number" value={enteredAge} onChange={ageAddHandler} />
        <Button>Add user</Button>
      </form>
    </>
  );
};

export default UserForm;