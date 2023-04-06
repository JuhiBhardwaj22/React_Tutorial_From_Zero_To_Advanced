import React from "react";
import { useDispatch } from "react-redux";
import { removeItem } from "../../utils/cartSlice";
import { IMG_CDN_URL } from "../../Constant";

export const Fooditem = ({ name, imageId, price, category }) => {
  const dispatch = useDispatch();

  const removeData = () => {
    dispatch(removeItem());
  };

  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-gray-100">
      <button className="float-right" onClick={() => removeData()}>
        ❌
      </button>
      <img src={IMG_CDN_URL + imageId} />
      <h3 className="font-bold text-md">{name}</h3>
      <br />
      <span>{category}</span>
      <br />
      <span>Rupess : {price}</span> <br />
      <br />
    </div>
  );
};

export default Fooditem;
