import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listofRes, setlistofRes] = useState([]);
  const [filteredsearch, setFilteredSearch] = useState([]);
  const [search, setSearch] = useState([]);

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

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>Looks Like You're Offline! Please Check Your Connection.</h1>;

  return listofRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex px-1">
        <div className="px-1 my-2">
          <input
            className="border border-solid border-black"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <button
            className="px-1 m-2 bg-green-200 rounded-md"
            onClick={() => {
              const filteredsearch = listofRes.filter((res) =>
                res.info.name.toLowerCase().includes(search.toLowerCase())
              );
              setFilteredSearch(filteredsearch);
            }}
          >
            Search
          </button>
        </div>
        <div className="px-1 my-2 flex items-center">
          <button
            className="px-4 bg-gray-200 rounded-md"
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
      <div className="flex flex-wrap">
        {filteredsearch.map((resturant) => (
          <Link
            className="style"
            key={resturant.info.id}
            to={"/restaurants/" + resturant.info.id}
          >
            <RestaurantCard key={resturant.info.id} resData={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
