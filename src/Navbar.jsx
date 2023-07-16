import React from "react";
import logo from "./icons/LOGO.png";
import { AiOutlineDown, AiOutlineSearch } from "react-icons/ai";
import "./Navbar.css"


function Navbar() {
  return (
    <div className="main-div">
      <div className="nav-div">
        <div>
          <img src={logo} alt="img" height="40px"></img>
        </div>
        <div>
          <span>
            course <AiOutlineDown className="down-icon" />
          </span>
        </div>
        <div>
          <span>
            programs <AiOutlineDown className="down-icon" />
          </span>
        </div>
      </div>
      <div className="nav-div2">
        <div>
          <AiOutlineSearch className="search-icon" />
        </div>
        <div>
          <span>Login</span>
        </div>
        <div>
          <button className="btn">JOIN NOW</button>
        </div>

      </div>

    </div>
  );
}

export default Navbar;
