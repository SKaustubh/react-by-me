import { useState } from "react";
import "./index.css"

function App() {

  const[color,setColor] = useState("oliver") 


  return(
    <>

    <div className="w-full h-screen duration-200 " style={{ backgroundColor :color}}>h
     
    </div>
    </>
  )
   
  

}

export default App;
