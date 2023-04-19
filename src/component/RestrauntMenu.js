import React from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constant";
import Shimmer from "../utils/Shimmer";
import useRestaurant from "../utils/useRestaurant";
import { addItem } from "../utils/cartSlice";

const RestrauntMenu = () => {
  const param = useParams();
  const { id } = param;
  //const {id} = useParams();// we can also do this

  let restaurant = useRestaurant(id);

  console.log("restaurant", restaurant);
  const menuList = restaurant?.cards
    ?.find((obj) => obj.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (obj) => obj.card.card.itemCards
    );

  const menuAllList = menuList?.map((menuItem) => {
    return menuItem?.card?.card;
  });

  const dispatch = useDispatch();
  const addFoodItem = (items) => {
    console.log("v", items);
    dispatch(addItem(items));
  };
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div className="flex">
      <div className="mr-8">
        <h1 className="text-xl font-bold">Restraunt</h1>
        <h2 className="text-lg font-bold">
          {restaurant?.cards[0]?.card?.card?.info.name}
        </h2>
        <img
          src={
            IMG_CDN_URL +
            restaurant?.cards[0]?.card?.card?.info.cloudinaryImageId
          }
        />
      </div>
      <div>
        <h1 className="text-xl font-bold">Menu🥘🍔🍟</h1>
        <ul data-testid="menu">
          {menuAllList.map((items, index) => {
            return (
              <>
                <h1 className="text-xl font-bold text-red-500">
                  {items?.title}
                </h1>
                {items?.itemCards?.map((lists, index) => {
                  return (
                    <div className="flex">
                      <li key={lists?.card?.info?.id}>
                        {lists?.card?.info?.name}
                      </li>
                      <button
                        data-testid="addBtn"
                        className="ml-5 bg-blue-500 h-6 w-4"
                        onClick={() => addFoodItem(lists?.card?.info)}
                      >
                        +
                      </button>
                    </div>
                  );
                })}
              </>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestrauntMenu;
