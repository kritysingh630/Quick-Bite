import { App_LOGO } from "../utils/constants";

const Header = () => {
    return (
      <div className="header">
        <div className="logo-cont">
          <img
            className="logo"
            src={App_LOGO}
            alt="logo-img"
          ></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>My cart</li>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;