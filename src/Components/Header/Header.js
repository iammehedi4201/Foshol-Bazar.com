import React from "react";
import "./Header.css";
import logo from "../../logo/logo.png";

const Header = (props) => {

    const{catchValue}=props

  function updatemenu() {
    if (document.getElementById("responsive-menu").checked == true) {
      document.getElementById("menu").style.borderBottomRightRadius = "0";
      document.getElementById("menu").style.borderBottomLeftRadius = "0";
    } else {
      document.getElementById("menu").style.borderRadius = "6px";
    }
  }


  return (
    <div className="App-header">
      <nav id="menu">
        <input type="checkbox" id="responsive-menu" onClick={updatemenu} />
        <label></label>

        <div className="logo-div">
          <a href="">
            <img className="logo-img" src={logo} alt="" />
          </a>
        </div>

        <div></div>

        <ul>
          <li>
            <a href="http://">Homei</a>
          </li>
          <li>
            <a class="dropdown-arrow">Products</a>
            <ul class="sub-menus">
              <li>
                <a href="http://">Products 1</a>
              </li>
              <li>
                <a href="http://">Products 2</a>
              </li>
              <li>
                <a href="http://">Products 3</a>
              </li>
              <li>
                <a href="http://">Products 4</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="http://">About</a>
          </li>
          <li>
            <a class="dropdown-arrow" href="http://">
              Services
            </a>
            <ul class="sub-menus">
              <li>
                <a href="http://">Services 1</a>
              </li>
              <li>
                <a href="http://">Services 2</a>
              </li>
              <li>
                <a href="http://">Services 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="http://">Contact Us</a>
          </li>
        </ul>

        <div className="search-section">
        <form className="d-flex ">
          <input
            id="input-field"
            className="form-control  "
            type="search"
            placeholder="Enter Product Name "
            aria-label="Search"
          />
          <button onClick={catchValue} className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>

        </div>

       
      </nav>
    </div>
  );
};

export default Header;
