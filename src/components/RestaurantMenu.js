import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
// import { Menu_API } from "../utils/contants";

const RestaurantMenu = () => {
  // const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);

  const [showIndex, setshowIndex] = useState(null);
  const [showItems, setShowItems] = useState(null);

  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // const fetchMenu = async () => {
  //   const data = await fetch(
  //     Menu_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
  //   );
  //   // 668681 - Mc Donald's

  //   const json = await data.json();
  //   console.log(json);

  //   setResInfo(json);
  // };

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.data?.cards[2]?.card?.card?.info;

  // const { itemCards } =
  //   data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]?.card?.card?.itemCards;

  // console.log(
  //   resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards
  // );

  console.log(resInfo);

  const categories =
    resInfo?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("categories ", categories);

  return (
    <div className="menu text-center">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/* <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} -{" "}
            <b>
              ₹
              {item?.card?.info?.price / 100 ||
                item?.card?.info?.defaultPrice / 100}
            </b>
          </li>
        ))}
      </ul> */}

      {/* Categories Accordian */}
      {categories?.map((category, index) => (
        // Controlled Component
        <RestaurantCategory
          key={category.card.card.title}
          data={category.card.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setshowIndex(index)}
          // showItems={index === showIndex && true}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
