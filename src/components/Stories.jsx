import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/css";
import { HashtagIcon, HeartIcon } from "@heroicons/react/24/solid";
import { ClockIcon } from "@heroicons/react/24/outline";
import Title from "../utils/Titles";
import { truncate } from "lodash";

const Stories = ({ story: { title, news } }) => {
  const splideOptions = {
    perPage: 4,
    perMove: 1,
    type: "loop",
    rewind: true,
    keyboard: "global",
    gap: "1rem",
    pagination: false,
    padding: "2rem",
    breakpoints: {
      1200: { perPage: 3 },
      991: { perPage: 2.3 },
      768: { perPage: 2 },
      500: { perPage: 1.3 },
      425: { perPage: 1 },
    },
  };

  return (
    <div className="nike-container2" style={{ marginBottom: "2.75rem" }}>
      <Title title={title} />
      <div style={{ marginTop: "1.75rem " }}>
        <Splide options={splideOptions}>
          {news.map((val, index) => (
            <SplideSlide key={index}>
              <div key={index} className="parentSlice">
                <div className="imageParent">
                  <img
                    src={val.img}
                    alt={`img/story/${index}`}
                    className="imagesSplice"
                  />
                </div>
                <div className="parentHeart">
                  <div>
                    <HeartIcon className="heartIcon" />
                    <span>{val.like}</span>
                  </div>
                  <div>
                    <ClockIcon className="heartIcon" />
                    <span>{val.time}</span>
                  </div>
                  <div>
                    <HashtagIcon className="heartIcon" />
                    <span>{val.by}</span>
                  </div>
                </div>
                <div className="parentLength">
                  <h1> {val.title}</h1>
                  <p> {truncate(val.text, { length: 175 })}</p>
                </div>
                <div className="auchorButton">
                  <a href={val.url}>{val.btn}</a>
                </div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default Stories;
