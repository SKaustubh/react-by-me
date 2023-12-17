import "./App.css";
import ClockHeading from "./components/ClockHeading";
import ClockSlogan from "./components/ClockSlogan";
import CurrentTime from "./components/CurrentTime";

function App() {
  return (
    <div>
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
  );
}

export default App;
