import React, { useContext } from "react";
import ScreenSizeContext from "./screen-size";
import "./common-components.css";

function Card({ children, img, title }) {
  const { isDesktop } = useContext(ScreenSizeContext);
  return (
    <div className={isDesktop ? "card-style" : "card-style-mobile"}>
      <img alt="University" src={img} className="image-style" />
      <div className="title-style">
        <label>{title}</label>
      </div>
      {children}
    </div>
  );
}

export default Card;
