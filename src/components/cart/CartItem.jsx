import React from "react";
import { MinusIcon, PlusIcon, TrashIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import {
  setDecreaseItemQTY,
  setIncreaseItemQTY,
  setRemoveItemFromCart,
} from "../../app/SliceValues";

const CartItem = ({
  item: { id, title, text, img, color1, color2, shadow, price, cartQuantity },
}) => {
  const dispatch = useDispatch();

  const onRemoveItem = () => {
    dispatch(
      setRemoveItemFromCart({
        id,
        title,
        text,
        img,
        color1,
        color2,
        shadow,
        price,
        cartQuantity,
      })
    );
  };

  const onIncreaseItemQTY = () => {
    dispatch(
      setIncreaseItemQTY({
        id,
        title,
        text,
        img,
        color1,
        color2,
        shadow,
        price,
        cartQuantity,
      })
    );
  };

  const onDecreaseItemQTY = () => {
    dispatch(
      setDecreaseItemQTY({
        id,
        title,
        text,
        img,
        color1,
        color2,
        shadow,
        price,
        cartQuantity,
      })
    );
  };

  const divStyle = {
    backgroundImage: `linear-gradient(to bottom, ${color1}, ${color2})`,
  };

  return (
    <>
      <div className="cartItemParent">
        <div className="cartItemValue">
          <div style={divStyle} className="cartItemColor">
            <img src={img} alt="images" className="cartItemImages" />
            <div className="cartItemMoney">${price}</div>
          </div>

          <div className="cartItemTitle">
            <div className="cartItemTitle2">
              <h1>{title}</h1>
              <p>{text}</p>
            </div>
          </div>
          <div className="cartItemButton">
            <button
              type="button"
              onClick={onDecreaseItemQTY}
              className="buttoncartItem"
            >
              <MinusIcon className="MinuesIcons" />
            </button>
            <div className="cartQuantity">{cartQuantity}</div>
            <button
              type="button"
              onClick={onIncreaseItemQTY}
              className="buttonIncrease"
            >
              <PlusIcon className="plusIcon" />
            </button>
          </div>
        </div>

        <div className="removeParent">
          <div className="removeParent2">
            <h1>${price * cartQuantity}</h1>
          </div>
          <div className="removebutton">
            <button
              type="button"
              // className="bg-theme-cart rounded p-1 lg:p-0.5 grid items-center justify-items-center cursor-pointer"
              className="buttonRemove"
              onClick={onRemoveItem}
            >
              <TrashIcon className="trashIcon" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CartItem;
