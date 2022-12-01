import Header from "./Components/Header/Header";
import "./App.css";
import Shop from "./Components/Shop/Shop";
import { useState } from "react";

function App() {

  const [inputValue,setInputValue]=useState("");

  const catchValue = (e) => {
    e.preventDefault();

    const value = document.getElementById("input-field").value;

    setInputValue(value);

    document.getElementById("input-field").value = '';

    document.getElementById("cart-div").style.display= "block"

  };

  return (
    <div className="App">
      <Header  
      catchValue={catchValue}
      ></Header>
      <Shop  
      value={inputValue}
      ></Shop>
    </div>
  );
}

export default App;
