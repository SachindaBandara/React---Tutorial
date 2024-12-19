import { useContext, useEffect, useState } from "react";
// import resList from "../utils/mockData";
import RestaurantCard, { withPromotedLabel } from "./RestaurentCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  // useState  Hook => create local state variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  // Destructuering
  // const arr = useState(resList);
  // const [listOfRestaurants, setListOfRestaurants] = arr;

  useEffect(() => {
    fetchData();
  }, []);

  // Use External API to grab the data
  // use async and await to resolve the promises

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type+DESKTOP_WEB_LISTING"
    );
    const json = await data.json(); // convert data to JSON format
    console.log(json);
    // Use optional chaining
    const restaurants =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setListOfRestaurants(restaurants);
    setFilteredRestaurant(restaurants);
  };

  // check online or offline
  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline! Please check your internet connection!
      </h1>
    );

  const { loggedInUser, setUserName } = useContext(UserContext);

  // Condition Rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  // Use Ternary Operator
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        {/* Search Bar */}
        <div className="search m-4 p-4">
          <input
            type="text"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              // Filter the resuratnt cars and update UI
              const filteredRestaurant = listOfRestaurants.filter(
                (res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase()) // combine search text and card's name text
              );
              setFilteredRestaurant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>

        {/* Filter Button */}
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-green-50 rounded-lg"
            onClick={() => {
              // call back function
              // Filter logic
              const filtered = listOfRestaurants.filter(
                (res) => res.info.avgRating >= 4.4
              );
              setFilteredRestaurant(filtered);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>

        <div className="search m-4 p-4 flex items-center">
          <label>User name :</label>
          <input
            className="border border-black p-2"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className="flex flex-wrap">
        {/* <RestaurantCard resData={filteredRestaurant[0]} /> 
          <RestaurantCard resData={filteredRestaurant[1]}/>
          <RestaurantCard resData={filteredRestaurant[2]}/> */}

        {/* 
            Used "map()" method; 
            not using keys as ;
                -> index (not acceptable/ use do not have unique id)
                -> unique id (best)
         */}

        {filteredRestaurant.map((restaurants) => (
          <Link
            to={"/restaurants/" + restaurants.info.id}
            key={restaurants.info.id}
          >
            {/* if the restaurant is promoted then add a promoted lable to it */}
            {restaurants.info.promoted ? (
              <RestaurantCardPromoted resData={restaurants.info} />
            ) : (
              <RestaurantCard resData={restaurants.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
