import styles from "./UserList.module.css";
import UserItem from "../UserItem/UserItem";

const UserList = (props) => {
  return (
    <ul className={styles["user-list"]}>
      {props.users.map((e) => (
        <UserItem
          key={Math.random().toString()}
        >{`${e.name} (${e.age} years old)`}</UserItem>
      ))}
    </ul>
  );
};

export default UserList;
