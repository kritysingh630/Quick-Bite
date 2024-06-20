import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-cont">
        <img
          className="logo"
          src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&txt_keyword=All"
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

const RestaurantCard = () => {
  return(
    <div className="res-card">
      <img className="food-img" alt="image" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/5/2/4c1e29e2-fecf-41b6-8b21-5a58338247fe_65797.jpg"></img>
      <h3>Burger King</h3>
      <h4>Burger, Wings</h4>
      <h4>4.2 stars</h4>
      <h4>30 minutes</h4>
    </div>
  )
}

const Body = () => {
  return(
    <div className="body">
      <div className="search">
        <input className="search-box" type="text" placeholder="Search Restaurants"></input>
        <button className="search-btn">Search</button>
      </div>
      <div className="res-container">
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
        <RestaurantCard/>
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="App">
      <Header />
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
