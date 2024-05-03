import React from "react";
import Clips from "../utils/Clips";
import SocialLink from "../utils/SocialLink";

const Hero = ({
  heroapi: { title, subtitle, img, sociallinks, videos, btntext },
}) => {
  return (
    <div className="relativeHero">
      <div className="backgroundColor"></div>
      <div className="containerHero">
        <h1>{title}</h1>
        <h1>{subtitle} </h1>
        <button className="heroButton button-theme">Explore Product</button>
        <div className="parentVideo">
          {videos.map((val, index) => (
            <Clips key={index} imgsrc={val.imgsrc} clip={val.clip} />
          ))}
        </div>
        <div className="iconsSocialMedia">
          {sociallinks.map((val, index) => (
            <SocialLink key={index} icon={val.icon} />
          ))}
        </div>
        <div className="parentBigImage ">
          <img src={img} alt="images" className="bigImage" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
