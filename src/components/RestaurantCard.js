import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
    const { resData } = props;
    const {loggedInUser} = useContext(UserContext);
  
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = resData?.info;
    const {deliveryTime} = resData?.info?.sla;
  
    return (
      <div className="m-2 p-2 w-[230px] h-[500px] rounded-md shadow-md bg-gray-100 hover:bg-gray-200">
        <img
          className="h-[200px] w-[230px] rounded-md"
          alt="image"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        ></img>
        <h3 className="font-bold py-4 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{deliveryTime} minutes</h4>
        <h4>User : {loggedInUser}</h4>
      </div>
    );
  };

  //Higher Order Functions

  //input -> RestaurantCard => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props)=>{
    return (
      <div>
        <label className="absolute m-2 p-2 bg-black text-white rounded-lg">Promoted</label>
        <RestaurantCard {...props}/>
      </div>
    )
  }
}

export default RestaurantCard;