import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";

const Body = () => {
  const [listofRes, setlistofRes] = useState([]);
  const [filteredsearch,setFilteredSearch]=useState([])
  const [search,setSearch]=useState([])

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/mapi/homepage/getCards?lat=12.9352403&lng=77.624532"
    );
    const json = await data.json();
    console.log(json);
    setlistofRes(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
    setFilteredSearch(
      json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants
    );
  };

  return listofRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="Search-Filter">
        <div className="search">
          <input
            className="search-box"
            type="text"
            value={search}
            onChange={(e)=>setSearch(e.target.value)}
          ></input>
          <button className="search-btn" onClick={()=>{
            const filteredsearch = listofRes.filter((res)=>res.info.name.toLowerCase().includes(search.toLowerCase()))
            setFilteredSearch(filteredsearch)
          }}>Search</button>
        </div>
        <div className="filter">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listofRes.filter(
                (res) => res.info.avgRating > 4.5
              );
              setlistofRes(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="res-container">
        {filteredsearch.map((resturant) => (
          <RestaurantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
