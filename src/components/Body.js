import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/MockData";

const Body = () => {
    return (
      <div className="body">
        <div className="search">
          <input
            className="search-box"
            type="text"
            placeholder="Search Restaurants"
          ></input>
          <button className="search-btn">Search</button>
        </div>
        <div className="res-container">
          {resList.map((resturant) => (
            <RestaurantCard key={resturant.info.id} resData={resturant} />
          ))}
        </div>
      </div>
    );
  };

export default Body;