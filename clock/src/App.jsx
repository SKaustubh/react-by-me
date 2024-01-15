import "./App.css";
import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/CurrentTime";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodList from "./components/FoodList";
import ErrorMsg from "./components/ErrorMsg";
import Container from "./components/Container";

function App() {
  let food = ["apple", "banana", "orange", "mango", "grape"];
  return (
    <>
      <div className="d-block">
        <ClockHeading>
          {" "}
          <ClockHeading />
        </ClockHeading>
        <ClockSlogan>
          {" "}
          <ClockSlogan />
        </ClockSlogan>
        <CurrentTime>
          <CurrentTime />
        </CurrentTime>
      </div>
      <br />
      <br />
      <Container>
        <h1 className="heading">healthy food</h1>

        <ErrorMsg items={food}></ErrorMsg>
        <FoodList items={food}></FoodList>
      </Container>
      <Container>
        hello ks
      </Container>
    </>
  );
}

export default App;
