import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");
  const [nameIsValid, setNameIsValid] = useState(true);

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const formHandler = (event) => {
    event.preventDefault();

    if (name.trim() === "") {
      setNameIsValid(false);
      return;
    }

    setNameIsValid(true);

    console.log(name);

    setName("");
  };

  return (
    <form onSubmit={formHandler}>
      <div className={nameIsValid ? "form-control" : "form-control invalid"}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={nameHandler} value={name} />
        {!nameIsValid && <p className="error-text">Please enter a name</p>}
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
