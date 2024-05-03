import React, { useEffect } from "react";
import CartEmpty from "./cart/CartEmpty";
import CartCount from "./cart/CartCount";
import CartItem from "./cart/CartItem";
import { useSelector, useDispatch } from "react-redux";

import {
  setClearCartItems,
  setCloseCart,
  setGetTotals,
} from "../app/SliceValues";

const Cart = () => {
  const dispatch = useDispatch();
  const ifCartState = useSelector((state) => state.cart.cartState);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.cartTotalAmount);
  const totalQTY = useSelector((state) => state.cart.cartTotalQantity);

  useEffect(() => {
    dispatch(setGetTotals());
  }, [cartItems, dispatch]);

  const onCartToggle = () => {
    dispatch(
      setCloseCart({
        cartState: false,
      })
    );
  };

  const onClearCartItems = () => {
    dispatch(setClearCartItems());
  };

  return (
    <>
      <div
        className={`fixedValues ${ifCartState ? "trueValues" : "falseValues"}`}
      >
        <div
          className={`durationValue ${
            ifCartState ? "trueValues" : "falseValues"
          } `}
        >
          <CartCount
            totalQTY={totalQTY}
            onCartToggle={onCartToggle}
            onClearCartItems={onClearCartItems}
          />
          {cartItems?.length === 0 ? (
            <CartEmpty onCartToggle={onCartToggle} />
          ) : (
            <div>
              <div className="scrollValues">
                {cartItems?.map((item, i) => (
                  <CartItem key={i} item={item} />
                ))}
              </div>
              <div className="subTotal">
                <div className="subTotal2">
                  <h1 className="subTotal3">SubTotal</h1>
                  <h1 className="subTotal4"> ${totalAmount}</h1>
                </div>
              </div>
              <div className="TotalValues1">
                <p className="TotalValues2">
                  Taxes and Shipping Will Calculate At Shipping
                </p>
                <button type="button" className="TotalValues3">
                  Check Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
