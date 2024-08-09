import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useContext, useEffect, useState } from "react";
import { Shimmer } from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

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
      const response = await fetch(
        "https://www.swiggy.com/mapi/homepage/getCards?lat=12.9352403&lng=77.624532"
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const json = await response.json();
      const restaurants =
        json?.data?.success?.cards[1]?.gridWidget?.gridElements?.infoWithStyle
          ?.restaurants || [];

      setListOfRes(restaurants);
      setFilteredSearch(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onlineStatus = useOnlineStatus();

  if (!onlineStatus) {
    return <h1>Looks Like You're Offline! Please Check Your Connection.</h1>;
  }

  const handleSearch = () => {
    const filteredsearch = listofRes.filter((res) =>
      res.info.name.toLowerCase().includes(search.toLowerCase())
    );
    setFilteredSearch(filteredsearch);
  };

  const handleTopRated = () => {
    const filteredList = listofRes.filter((res) => res.info.avgRating > 4.2);
    setFilteredSearch(filteredList);
  };

  const { loggedInUser, setuserName } = useContext(UserContext);

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
            placeholder="Search for restaurants"
          />
          <button
            className="px-1 m-2 bg-green-200 rounded-md"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
        <div className="px-1 my-2 mx-6 flex items-center">
          <button
            className="px-4 bg-gray-200 rounded-md"
            onClick={handleTopRated}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className="px-1 my-2 mx-2 flex items-center">
          <label>Username : </label>
          <input
            className="border border-black mx-2"
            value={loggedInUser}
            onChange={(e) => setuserName(e.target.value)}
          ></input>
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
