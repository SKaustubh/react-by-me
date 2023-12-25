import styles from "./App.module.css";
import Button from "./components/Button";
import Display from "./components/Display";

const App =() => {
  return (
    <div className={styles.calculator}>
      <Display />
      <Button />
    </div>
  );
}

export default App;
