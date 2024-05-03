import React from "react";
import { ChevronDoubleLeftIcon, XMarkIcon } from "@heroicons/react/24/solid";

const CartCount = ({ onCartToggle, totalQTY, onClearCartItems }) => {
  return (
    <>
      <div className="cartCount">
        <div className="cartCount2">
          <div className="CartCount3" onClick={onCartToggle}>
            <ChevronDoubleLeftIcon className="CartCount4" />
          </div>
          <div className="cartCount5">
            <h1>
              {" "}
              Your Cart
              <span> ({totalQTY} Items)</span>
            </h1>
          </div>
        </div>
        <div className="cartCounter">
          <button
            type="button"
            onClick={onClearCartItems}
            className="buttoncartCount"
          >
            <XMarkIcon className="iconCartCount" />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartCount;
