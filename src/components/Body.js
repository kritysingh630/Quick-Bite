import RestaurantCard from "./RestaurantCard";
import { resList } from "../utils/MockData";
import { useState } from "react";

const Body = () => {
  const [listofRes,setlistofRes] = useState(resList)
  return (
    <div className="body">
      <div className="Search-Filter">
        <div className="search">
          <input
            className="search-box"
            type="text"
            placeholder="Search Restaurants"
          ></input>
          <button className="search-btn">Search</button>
        </div>
        <div className="filter">
          <button className="filter-btn" onClick={()=>{
            const filteredList = listofRes.filter(
              (res) => res.info.avgRating > 4.5
            )
            setlistofRes(filteredList)
          }}>Top Rated Restaurants</button>
        </div>
      </div>
      <div className="res-container">
        {listofRes.map((resturant) => (
          <RestaurantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
