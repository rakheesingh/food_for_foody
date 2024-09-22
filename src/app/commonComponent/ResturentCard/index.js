import React from "react";
import "./index.css";
//import { ReactComponent as Icon } from "jsx:./star.svg";
import Icon from "jsx:./star.svg";

 const ResturentCard = ({
  foodImage,
  name,
  star,
  topCusions,
  timing = "30-35",
}) => {
  console.log("ResturentCard keep calling", )
  return (
    <div className="container">
      <div className="resturent-card">
        <img src={foodImage} alt="food-name"></img>
        <div className="resturent-deatils">
          <h3>{name}</h3>
          <div className="sameRow ">
            <Icon />
            <p>
              {star} • {timing} mins
            </p>
          </div>
          <p className="secondaryColor">{topCusions.join(", ")}</p>
        </div>
      </div>
    </div>
  );
};

export const MemoResturent = React.memo(ResturentCard, (prevProps, nextProps) => {
  return (
    prevProps.foodImage === nextProps.foodImage &&
    prevProps.name === nextProps.name &&
    prevProps.star === nextProps.star &&
    prevProps.topCuisions?.join(",") === nextProps.topCuisions?.join(",") &&
    prevProps.timing === nextProps.timing
  );
});
