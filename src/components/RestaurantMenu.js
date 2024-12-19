import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategories";

const RestaurantMenu = () => {
  //const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setShowIndex] = useState(0);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(MENU_API + resId);
  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json.data);
  // };

  if (resInfo === null) return <Shimmer />;

  // Use optional chaining with a fallback to avoid destructuring undefined
  // Safely access nested properties with optional chaining
  const name = resInfo?.cards?.[2]?.card?.card?.info?.name || "Unknown";
  const cuisines =
    resInfo?.cards?.[2]?.card?.card?.info?.cuisines?.join(", ") || "N/A";
  const costForTwoMessage =
    resInfo?.cards?.[2]?.card?.card?.info?.costForTwoMessage || "N/A";

  // Check if `itemCards` exists before rendering
  const itemCards =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card
      ?.card?.itemCards;

  console.log(itemCards);

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[3]?.card?.card?.itemCards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log(categories);

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h3 className="font-bold text-lg">{cuisines}</h3>
      <h3 className="font-bold text-base">{costForTwoMessage}</h3>

      {/* Categories Accordians */}

      {categories.map((category, index) => (
        // Controlled component( Parent component contolle it )
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}

      {/* <h2>Menu</h2>
      <ul>
        {itemCards ? (
          itemCards.map((item) => (
            <li key={item.card.info.id}>
              {item.card.info.name} - {"Rs."}
              {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
            </li>
          ))
        ) : (
          <p>No menu items available.</p>
        )}
      </ul> */}

      {/* <li>
          {itemCards[0].card.info.name} - {"Rs."}
          {itemCards[0].card.info.price / 100 ||
            itemCards[0].card.info.defaultPrice / 100}
        </li>
        <li>
          {itemCards[1].card.info.name} - {"Rs."}
          {itemCards[1].card.info.price / 100 ||
            itemCards[1].card.info.defaultPrice / 100}
        </li> */}
    </div>
  );
};
export default RestaurantMenu;
