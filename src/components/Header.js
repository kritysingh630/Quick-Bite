import { useState } from "react";
import { App_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [loginBtn, setloginBtn] = useState("Login");

  const onlineStatus = useOnlineStatus();

  return (
    <div className="flex justify-between shadow-lg m-2 bg-pink-50 mb-2">
      <div className="logo-container">
        <img className="w-32" src={App_LOGO} alt="logo-img"></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status:{onlineStatus?"✅":"🔴"}</li>
          <li className="px-4"><Link className="style" to="/">Home</Link></li>
          <li className="px-4"><Link className="style" to="/about">About Us</Link></li>
          <li className="px-4"><Link className="style" to="/contact">Contact Us</Link></li>
          <li className="px-4"><Link className="style" to="/grocery">Grocery</Link></li>
          <button
            className="px-4"
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
