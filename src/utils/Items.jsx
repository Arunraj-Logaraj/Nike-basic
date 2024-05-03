import React from "react";
import { StarIcon, ShoppingBagIcon } from "@heroicons/react/24/solid";
import { useDispatch } from "react-redux";
import { setAddItemToCard } from "../app/SliceValues";

const Items = ({
  ifExists,
  id,
  color1,
  color2,
  shadow,
  title,
  text,
  img,
  btn,
  rating,
  price,
}) => {
  const dispatch = useDispatch();

  const onAddToCart = () => {
    const item = {
      id,
      color1,
      color2,
      shadow,
      title,
      text,
      img,
      btn,
      rating,
      price,
    };
    dispatch(setAddItemToCard(item));
  };

  const divStyle = {
    backgroundImage: `linear-gradient(to bottom, ${color1}, ${color2})`,
  };
  return (
    <div
      style={divStyle}
      className={ifExists ? "boxContainer" : "boxContainer2"}
    >
      <div className="leftSide">
        <div className="titleDiv">{title}</div>
        <div className="textDiv">{text}</div>
        <div className="priceDiv">
          <div>{price}</div>
          <StarIcon className="starIcon" />
          <div>{rating}</div>
        </div>

        <div className="buttonDiv">
          <button className="buttonAddCart" onClick={() => onAddToCart()}>
            <ShoppingBagIcon className="shopping" />
          </button>
          <button>{btn}</button>
        </div>
      </div>
      <div>
        <img
          src={img}
          alt="images"
          className={ifExists ? "imageShoes" : "imageShoes2"}
        />
      </div>
    </div>
  );
};

export default Items;
