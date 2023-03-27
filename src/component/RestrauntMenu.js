import React from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../Constant";
import Shimmer from "../utils/Shimmer";
import useRestaurant from "../utils/useRestaurant";

const RestrauntMenu = () => {
  const param = useParams();
  const { id } = param;
  //const {id} = useParams();// we can also do this

  let restaurant = useRestaurant(id);

  const menuList = restaurant?.cards?.find((obj) => obj.groupedCard)?.
  groupedCard?.cardGroupMap?.REGULAR?.cards.filter(obj => obj.card.card.itemCards);

  const menuAllList = menuList?.map((menuItem) => {
    return  menuItem?.card?.card;
  })
 
  return !restaurant ? (
    <Shimmer />
  ) : (
    <div>
      <div>
        <h1>Restraunt</h1>
        <h2>{restaurant?.cards[0]?.card?.card?.info.name}</h2>
        <img src={IMG_CDN_URL + restaurant?.cards[0]?.card?.card?.info.cloudinaryImageId} />
      </div>
      <div>
        <h1>Menu🥘🍔🍟</h1>
          <ul>
            {menuAllList.map((items,index) => {
              return(
                <>
                   <h1 className="text-xl font-bold">{items?.title}</h1> 
                   {items?.itemCards?.map((lists,index) =>{
                    return(
                      <div>
                          <li key={index}>{lists?.card?.info?.name}</li>
                      </div>
                    )
                   })}
                </>
              )
            })}
          </ul>
      </div>
    </div>
  );
};

export default RestrauntMenu;
