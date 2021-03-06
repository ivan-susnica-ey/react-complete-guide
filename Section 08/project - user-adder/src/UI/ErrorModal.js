import styles from "./ErrorModal.module.css";
import Button from "./Button";

const ErrorModal = (props) => {
  const closeModal = () => {
    props.setModalClosed(true);
  };

  return (
    <div className={styles.outer}>
      <div className={styles.inner}>
        <h3>{props.title}</h3>
        {props.children}
        <Button type="button" onClick={closeModal}>
          Okay
        </Button>
      </div>
    </div>
  );
};

export default ErrorModal;
