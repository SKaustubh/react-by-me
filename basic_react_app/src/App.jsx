import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
let removeValue,addValue;
if(counter <20){
  addValue = () => {
    console.log("Clicked", Math.random(), counter);
    setCounter(counter + 1);
  };
}

  if(counter >0){
   removeValue = () => {
    console.log("Removed", Math.random(), counter);
    setCounter(counter - 1);
  };
}
  return (
    <>
      <h1>my react</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value</button>
      <br />
      <button onClick={removeValue}>remove value value</button>
    </>
  );
}

export default App;
