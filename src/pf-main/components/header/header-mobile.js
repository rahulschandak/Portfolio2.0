import React from "react";
import "./header.css";
import BodyLabel from "../common/body-label";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars } from "@fortawesome/free-solid-svg-icons";

function HeaderMobile() {
  let navigate = useNavigate();

  const handleHome = () => {
    navigate("/home");
  }

  return (
    <div className="header-container">
      <div className="home-button" onClick={handleHome}>
        <img src="images\Logo.png" alt="ProfilePic" className="logo-size" />
        <BodyLabel className="article padding-left">Rahul</BodyLabel>
      </div>

      <FontAwesomeIcon icon={faBars} />

      {/* <div className="menu-items">
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/education">Education</NavLink>
        <NavLink to="/work">Work</NavLink>
        <NavLink to="/projects">Projects</NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div> */}
    </div>
  )
}

export default HeaderMobile;
