import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listofRes, setListOfRes] = useState([]);
  const [filteredSearch, setFilteredSearch] = useState([]);
  const [search, setSearch] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=12.9352403&lng=77.624532"
      );
      const json = await data.json();
      console.log(json);
      const restaurants = json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
        ?.restaurants || [];
      setListOfRes(restaurants);
      setFilteredSearch(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return <h1>Looks Like You're Offline! Please Check Your Connection.</h1>;

  const handleSearch = () => {
    const filteredsearch = listofRes.filter((res) =>
      res.info.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredSearch(filteredsearch);
  };

  const handleTopRated = () => {
    const filteredList = listofRes.filter(
      (res) => res.info.avgRating > 4.2
    );
    console.log("Filtered Top Rated Restaurants:", filteredList);
    setFilteredSearch(filteredList);
  };

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
          />
          <button
            className="px-1 m-2 bg-green-200 rounded-md"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="px-1 my-2 flex items-center">
          <button
            className="px-4 bg-gray-200 rounded-md"
            onClick={handleTopRated}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filteredSearch.length > 0 ? (
          filteredSearch.map((restaurant) => (
            <Link
              className="style"
              key={restaurant.info.id}
              to={"/restaurants/" + restaurant.info.id}
            >
              {restaurant.info.promoted ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard key={restaurant.info.id} resData={restaurant} />
              )}
            </Link>
          ))
        ) : (
          <p>No restaurants found</p>
        )}
      </div>
    </div>
  );
};

export default Body;
