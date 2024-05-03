import React from "react";
import { PlayIcon } from "@heroicons/react/24/solid";
import "./style.css";

const Clips = ({ imgsrc, clip }) => {
  return (
    <>
      <div className="videoContainer">
        <img src={imgsrc} alt="images" className="videoImage" />
        <div className="playiconVideo blur-effect-theme">
          <PlayIcon />
        </div>
        <video
          autoPlay={true}
          loop={true}
          muted={true}
          playsInline={true}
          className="videoPlay"
        >
          <source type="video/mp4" src={clip} />
        </video>
      </div>
    </>
  );
};

export default Clips;
