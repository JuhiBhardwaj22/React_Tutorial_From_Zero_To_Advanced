import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "../utils/Shimmer";
import RestrauntCard from "./RestrauntCard";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

import { RESTRAUNT_LIST_URL } from "../Constant";

const Body = () => {
  //We can't update restaurantList directly so we need to create state variable
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const isOnline = useOnline();

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    const data = await fetch(RESTRAUNT_LIST_URL);
    const jsonData = await data.json();
    setAllRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
  }
  if (!isOnline) {
    return <h1>Offline🔴, please check your internet connection!!</h1>;
  }
  if (!allRestaurants) return null;

  return allRestaurants?.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Please Type Here..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setFilteredRestaurants(data);
          }}
        >
          Search
        </button>
        <button
          className="clear-btn"
          disabled={!searchText}
          onClick={() => {
            setSearchText("");
            setFilteredRestaurants(allRestaurants);
          }}
        >
          Clear
        </button>
      </div>
      <div className="restaurant-list">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restraunt/" + restaurant.data.id}
              key={restaurant.data.id}
            >
              <RestrauntCard {...restaurant.data} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
