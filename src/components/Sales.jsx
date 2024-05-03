import React from "react";
import Titles from "../utils/Titles";
import Items from "../utils/Items";

const Sales = ({ ifExists, endpoint: { title, items } }) => {
  return (
    <>
      <div className="nikeContainer">
        <Titles title={title} />
        <div className="containerBoxModal">
          {items?.map((item, index) => (
            <Items {...item} key={index} ifExists={ifExists} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sales;
