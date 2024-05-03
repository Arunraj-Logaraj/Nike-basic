import React from "react";
import emptybag from "../../assets/emptybag.png";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";

const CartEmpty = () => {
  return (
    <>
      <div className="cartEmpty">
        <img src={emptybag} alt="emptybag/img" className="cartEmptyimage" />
        <button
          type="button"
          className="cartEmptyButton"
          //   onClick={onCartToggle}
        >
          <ArrowLeftIcon style={{ width: "1.25rem", height: "1.25rem" }} />
          <span className="">Back To Nike Store</span>
        </button>
      </div>
    </>
  );
};

export default CartEmpty;
