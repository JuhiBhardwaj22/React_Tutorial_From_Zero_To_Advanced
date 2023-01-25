import React from "react";
import { IMG_CDN_URL } from "../Constant";
import location from "../assest/location.png";

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
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <br />
      <span style={{ color: "black" }}>{cuisines.join(", ")}</span>
      <br /> <br />
      <span style={{ color: "black" }}>{costForTwoString}</span> <br />
      <div>
        <span
          style={{
            border: "1px solid",
            color: "white",
            background: "rgb(0, 146, 63)",
          }}
        >
          {totalRatingsString}
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <span style={{ color: "gray" }}>{slaString}</span>
        <br />
        <br />
        <img src={location} style={{ height: 28, width: 20 }} />
        <span>{lastMileTravelString}</span>
      </div>
      <br />
    </div>
  );
};

export default RestrauntCard;
