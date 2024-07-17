import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/contants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    //  Dispatch action
    dispatch(addItem(item));
  };

  return (
    <div>
      {items.map((item) => (
        <div
          data-testid="foodItems"
          key={item.card.info.id}
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex"
        >
          <div className="w-9/12">
            <div className="py-2 flex flex-wrap flex-col">
              <span className="font-bold">{item.card.info.name}</span>
              <span className="font-semibold">
                ₹
                {item.card.info.price / 100 ||
                  item.card.info.defaultPrice / 100}
              </span>
              <p className="text-xs font-sans">{item.card.info.description}</p>
            </div>
          </div>
          <div className="w-3/12 p-4 relative">
            <div className="absolute bottom-0 left-12">
              <button
                className="py-1 px-2 text-sm rounded-md bg-black text-white shadow-lg"
                onClick={() => handleAddItem(item)}
              >
                Add +
              </button>
            </div>
            <img
              src={
                CDN_URL + item.card.info.imageId ||
                item.card.info.cloudinaryImageId
              }
              className="w-full"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
