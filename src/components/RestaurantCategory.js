import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // const [showItems, setShowItems] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    // setShowItems(!showItems);
    setIsOpen(!isOpen);
    setShowIndex();
  };

  return (
    <div>
      {/* Header */}
      <div className="w-6/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-extrabold text-lg">
            {data.title} ({data.itemCards.length})
          </span>
          <span>&#9660;</span>
        </div>

        {showItems && isOpen && <ItemList items={data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
