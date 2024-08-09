import { useContext, useState } from "react";
import { App_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setloginBtn] = useState("Login");

  const onlineStatus = useOnlineStatus();

  const { loggedInUser } = useContext(UserContext);
  // console.log(loggedInUser);

  //Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between shadow-lg m-2 bg-pink-50 mb-2">
      <div className="logo-container">
        <img className="w-32" src={App_LOGO} alt="logo-img"></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status:{onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link className="style" to="/">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link className="style" to="/about">
              About Us
            </Link>
          </li>
          <li className="px-4">
            <Link className="style" to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="px-4">
            <Link className="style" to="/grocery">
              Grocery
            </Link>
          </li>
          <li className="px-4 font-bold text-l">🛒Cart - ({cartItems.length} items)</li>
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
          <li className="font-bold px-2">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
