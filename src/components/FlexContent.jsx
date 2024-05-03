import React from "react";

const FlexContent = ({
  ifExists,
  endpoint: { title, heading, text, img, btn, url },
}) => {
  return (
    <div className={ifExists ? "parentBig" : "parentBig2"}>
      <div>
        <img src={img} alt="images" className="bigImages" />
      </div>
      <div className="HIGHLIGHTS">
        <h2>{heading}</h2>
        <h3>{title}</h3>
        <p>{text}</p>
        <button>{btn}</button>
      </div>
    </div>
  );
};

export default FlexContent;
