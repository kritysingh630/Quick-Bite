import { useState } from "react";
import { App_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtn, setloginBtn] = useState("Login");

  return (
    <div className="header">
      <div className="logo-cont">
        <img className="logo" src={App_LOGO} alt="logo-img"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li><Link className="style" to="/">Home</Link></li>
          <li><Link className="style" to="/about">About Us</Link></li>
          <li><Link className="style" to="/contact">Contact Us</Link></li>
          <li>My cart</li>
          <button
            className="login"
            onClick={() => {
              loginBtn === "Login"
                ? setloginBtn("Logout")
                : setloginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
