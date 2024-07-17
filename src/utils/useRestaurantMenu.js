import { useEffect, useState } from "react";
import { Menu_API } from "./contants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      Menu_API + resId + "&catalog_qa=undefined&submitAction=ENTER"
    );
    const json = await data.json();

    console.log(json);
    setResInfo(json);
    // setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
