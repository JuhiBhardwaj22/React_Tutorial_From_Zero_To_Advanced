import React from "react";
import { IMG_CDN_URL } from "../Constant";
import location from "../assest/img/location.png";

export const RestrauntCard = ({
  name,
  cuisines,
  cloudinaryImageId,
  totalRatingsString,
  slaString,
  costForTwoString,
  lastMileTravelString,
}) => {
  return (
    <div className="w-56 p-2 m-2 shadow-lg bg-gray-100">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3 className="font-bold text-lg">{name}</h3>
      <br />
      <span>{cuisines.join(", ")}</span>
      <br /> <br />
      <span>{costForTwoString}</span> <br />
      <div>
        <span
        >
          {totalRatingsString}
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span>{slaString}</span>
        <br />
        <br />
        <img className="w-4" src={location}/>
        <span>{lastMileTravelString}</span>
      </div>
      <br />
    </div>
  );
};

export default RestrauntCard;
