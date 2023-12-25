import styles from "./Button.module.css";

const Button = () => {
  const buttonNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "=",
    "/",
    "9",
    "0",
    ".",
  ];
  return (
    <div className={styles.buttonContainer}>
      {buttonNames.map((name,id) => (
        <button key={id} className={styles.button}>
        {name}
        </button>
      ))}
    </div>
  );
};

export default Button;
