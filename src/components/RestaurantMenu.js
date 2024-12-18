import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  //const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

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
  const name = resInfo?.cards[2]?.card?.card?.info?.name || "Unknown";
  const cuisines =
    resInfo?.cards[2]?.card?.card?.info?.cuisines?.join(", ") || "N/A";
  const costForTwoMessage =
    resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage || "N/A";

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card;

  console.log(itemCards);

  return (
    <div>
      <h1>{name}</h1>
      <h3>{cuisines}</h3>
      <h3>{costForTwoMessage}</h3>

      <h2>Menu</h2>
      <ul>
        {/* {itemCards.map((item) => {
          <li key={item.card.info.id}>
            {item.card.info.name} - {"Rs."}
            {item.card.info.price/100 || item.card.info.defaultPrice/100}
          </li>;
        })} */}
        <li>
          {itemCards[0].card.info.name} - {"Rs."}
          {itemCards[0].card.info.price / 100 ||
            itemCards[0].card.info.defaultPrice / 100}
        </li>
        <li>
          {itemCards[1].card.info.name} - {"Rs."}
          {itemCards[1].card.info.price / 100 ||
            itemCards[1].card.info.defaultPrice / 100}
        </li>
      </ul>
    </div>
  );
};
export default RestaurantMenu;
