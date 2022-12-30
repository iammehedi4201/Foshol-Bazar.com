import Header from "./Components/Header/Header";
import "./App.css";
import Shop from "./Components/Shop/Shop";
import { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import AboutUs from "./Components/AboutUs/AboutUs";
import Error from "./Components/Error/Error";
import Order from "./Components/Order/Order";

function App() {
  const [inputValue, setInputValue] = useState("");

  const navigator = useNavigate();

  const catchValue = (e) => {
    e.preventDefault();

    const value = document.getElementById("input-field").value;

    if (value) {
      setInputValue(value);

      document.getElementById("input-field").value = "";

      const path = `/Shop`;

      navigator(path);
    }
  };

  return (
    <div className="App">
      <Header catchValue={catchValue}></Header>

      {/* <Shop  
      value={inputValue}
      ></Shop> */}

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<AboutUs />}></Route>
        <Route path="/Shop" element={<Shop value={inputValue} />}></Route>
        <Route path="/Order" element={<Order />}></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>

      <Footer></Footer>
    </div>
  );
}

export default App;
