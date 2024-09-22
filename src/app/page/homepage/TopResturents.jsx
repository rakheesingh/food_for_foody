import React, {useEffect, useState} from "react";
import { MemoResturent } from "../../commonComponent/ResturentCard";
import { resturentsList } from "app/helper/Constants";
import { useDispatch, useSelector } from "react-redux";
import { fetchRestaurants } from "app/stateManager/redux/resturentSlice";

const TopResturents = () => {
  const dispatch = useDispatch();
  const { loading, restaurants, error } = useSelector((state) => state.restaurants);

  useEffect(() => {
    dispatch(fetchRestaurants({ page: 1, limit: 5 }));
  }, [dispatch]);

  return (
    <div
      style={{
        padding: "2rem 10rem",
        display: "flex",
        gap: "1rem",
        flexWrap: "wrap",
      }}
    >
      {restaurants.map(
        (resturent) => (
          <MemoResturent
            key={resturent.id}
            foodImage={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              resturent.cloudinaryImageId
            }
            star={resturent.avgRatingString}
            name={resturent.name}
            topCusions={resturent.cuisines}
          />
        )
      )}
    </div>
  );
};

export default TopResturents;
