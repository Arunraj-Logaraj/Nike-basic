import React from "react";

const Footer = ({ footerAPI: { titles, links } }) => {
  return (
    <>
      <footer className="break">
        <div className="nike-container2">
          <div className="parentFooter">
            {titles.map((item, index) => (
              <div>{item.title}</div>
            ))}
          </div>
          <div className="parentFooter2">
            {links.map((item2, index) => (
              <ul key={index} className="removeStyle">
                {item2.map((value) => (
                  <li>{value.link}</li>
                ))}
              </ul>
            ))}
          </div>
          <div className="footerFinal">Copyright© All Reserved Rights</div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
