import { useState } from "react";
import { App_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setloginBtn] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="header">
      <div className="logo-cont">
        <img className="logo" src={App_LOGO} alt="logo-img"></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Online Status:{onlineStatus?"✅":"🔴"}</li>
          <li><Link className="style" to="/">Home</Link></li>
          <li><Link className="style" to="/about">About Us</Link></li>
          <li><Link className="style" to="/contact">Contact Us</Link></li>
          <li><Link className="style" to="/grocery">Grocery</Link></li>
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
