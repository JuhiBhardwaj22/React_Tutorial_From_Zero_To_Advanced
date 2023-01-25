import React from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constant";
import Shimmer from "../utils/Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestrauntMenu = () => {
  const param = useParams();
  const { id } = param;
  //const {id} = useParams();// we can also do this

  const restaurant = useRestaurant(id);

  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="menu">
      <div>
        <h1>Restraunt</h1>
        <h2>{restaurant.name}</h2>
        <img src={IMG_CDN_URL + restaurant.cloudinaryImageId} />
      </div>
      <div>
        <h1>Menu🥘🍔🍟</h1>
        <ul>
          {Object.values(restaurant?.menu?.items).map((items) => {
            return <li key={items.id}>{items.name}</li>;
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestrauntMenu;
