import { useState } from "react";
import Card from "./UI/Card";
import UserForm from "./components/UserForm/UserForm";

import styles from "./App.module.css";
import UserList from "./components/UserList/UserList";

const App = () => {
  const [users, setUsers] = useState([]);

  const addUser = (users) => {
    setUsers((prevUsers) => {
      return [users, ...prevUsers];
    });
  };

  let content = null;

  if (users.length > 0) {
    content = (
      <Card>
        <UserList users={users} />
      </Card>
    );
  }

  return (
    <div className={styles["app"]}>
      <Card>
        <UserForm addUser={addUser} />
      </Card>
      {content}
    </div>
  );
};

export default App;
