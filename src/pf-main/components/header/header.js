import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import BodyLabel from "../common/body-label";
import { useNavigate } from "react-router-dom";
import HeaderMobile from "./header-mobile";
import ScreenSizeContext from "../common/screen-size";

function Header() {
  const { isDesktop } = useContext(ScreenSizeContext);
  let navigate = useNavigate();
  const handleHome = () => {
    navigate("/home");
  };

  return isDesktop ? (
    <div className="header-container">
      <div className="home-button" onClick={handleHome}>
        <img src="images\Logo.png" alt="ProfilePic" className="logo-size" />
        <BodyLabel className="article padding-left">Rahul</BodyLabel>
      </div>
      <div className="menu-items">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/education">Education</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>
    </div>
  ) : (
    <HeaderMobile />
  );
}

export default Header;
