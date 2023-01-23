import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constant";
import Shimmer from "./Shimmer";

const RestrauntMenu = () => {
  const [restaurant, setRestaurant] = useState(null);
  const param = useParams();
  const { id } = param;
  //const {id} = useParams();// we can also do this

  useEffect(() => {
    getRestrauntInfo();
  }, []);

  async function getRestrauntInfo() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/v4/full?lat=12.9351929&lng=77.62448069999999&menuId=" +
        id
    );
    const json = await data.json();
    setRestaurant(json.data);
  }

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
