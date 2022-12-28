import Header from "./Components/Header/Header";
import "./App.css";
import Shop from "./Components/Shop/Shop";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";

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
      {/* <Shop  
      value={inputValue}
      ></Shop> */}
      
      <Routes>
          <Route path="/" element={<Home/>} ></Route>
          <Route></Route>
          <Route></Route>
      </Routes>
   
   <Footer></Footer>
 
    </div>
  );
}

export default App;
