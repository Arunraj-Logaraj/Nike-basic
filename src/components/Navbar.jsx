import React, { useState, useEffect } from "react";
import {
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import "./style.css";
import { useDispatch, useSelector } from "react-redux";
import logo from "../assets/logo.png";
import { setOpenCart } from "../app/SliceValues";

const Navbar = () => {
  let [navbar, setNavbar] = useState(false);
  const dispatch = useDispatch();

  let handlarScroll = () => {
    if (window.scrollY > 30) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handlarScroll);
    return () => {
      window.removeEventListener("scroll", handlarScroll);
    };
  }, []);

  const onCartToggle = () => {
    dispatch(
      setOpenCart({
        cartState: true,
      })
    );
  };

  return (
    <>
      <header className={!navbar ? "navbarHidden" : "navbarNon"}>
        <nav className="navbarContainer">
          <div>
            <img src={logo} alt="images" className="tick" />
          </div>
          <div className="icons">
            <ul>
              <li className="iconNavbar">
                <MagnifyingGlassIcon className="icon-style" />
              </li>
              <li className="iconNavbar">
                <ShoppingBagIcon className="icon-style" />
              </li>
              <li className="iconNavbar">
                <button
                  type="button"
                  // className="buttonIconNavbar"
                  onClick={onCartToggle}
                >
                  <HeartIcon className="icon-style" />
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
