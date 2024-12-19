import { CDN_URL } from "../utils/constants";

// JS object for inline styling
const styleCard = {
  backgroundColor: "#f0f0f0",
};

// const RestaurantCard = (props) => {
//   return (
//     <div className="res-card" style={styleCard}>
//       <img className="res-logo" alt="res-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIWMFWLQzcCDAU55KR20qZqU_xYEPRijRMRA&s"/>
//       <h3>{props.resName}</h3>
//       <h4>{props.cuisine}</h4>
//       <h4>{props.starts}</h4>
//       <h4>{props.Time}</h4>
//     </div>
//   );
// };

// Destructuring

const RestaurantCard = (props) => {
  const { resData } = props; // Default value for resData

  // Safely destructure properties with default values
  const {
    cloudinaryImageId = "", // Fallback to empty string
    name = "Unknown Restaurant",
    cuisines = [],
    avgRating = "No Rating",
    costForTwo = "Cost unavailable",
    deliveryTime = "N/A",
  } = resData; // Ensure resData.data exists before destructuring

  // "?." is optional chaining operator

  return (
    <div className="m-4 p-4 w-[250px] rounded-md bg-gray-50 hover:bg-gray-400">
      <img
        className="rounded-md"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>
        {cuisines.length > 0 ? cuisines.join(", ") : "Cuisines unavailable"}
      </h4>{" "}
      {/* Fallback for cuisines */}
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4>
    </div>
  );
};

// Higher Order Component  ( for Promoted Lable )

// Input - RestaurantCard ==> Output - RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Promoted</label>
        {/* Pass all the properties to the component ==>> {...props} */}
        <RestaurantCard {...props}/>
      </div>
    );
  };
};

export default RestaurantCard;
