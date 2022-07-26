import { useState } from "react";

const SimpleInput = (props) => {
  const [name, setName] = useState("");

  const nameHandler = (event) => {
    setName(event.target.value);
  };

  const formHandler = (event) => {
    event.preventDefault();

    console.log(name);

    setName("");
  };

  return (
    <form onSubmit={formHandler}>
      <div className="form-control">
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" onChange={nameHandler} value={name} />
      </div>
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
