import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import BodyLabel from "../common/body-label";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faBars,
  faCircleXmark
} from "@fortawesome/free-solid-svg-icons";

function HeaderMobile() {
  let navigate = useNavigate();
  const [showNavBar, setShowNavBar] = useState(false);

  const handleHome = () => {
    navigate("/home");
  };

  const handleNavIconClick = () => {
    setShowNavBar(!showNavBar);
  };

  return (
    <div className="header-container">
      <div className="home-button" onClick={handleHome}>
        <img src="images\Logo.png" alt="ProfilePic" className="logo-size" />
        <BodyLabel className="article padding-left">Rahul</BodyLabel>
      </div>

      <div onClick={handleNavIconClick}>
        {showNavBar ? (
          <div className="navbar-container">
            <FontAwesomeIcon
              onClick={handleNavIconClick}
              icon={faCircleXmark}
              size="2x"
            />
            <div className={`navbar opened`}>
              <ul>
                <li>
                  <NavLink to="/home">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/education">Education</NavLink>
                </li>
                <li>
                  <NavLink to="/work">Work</NavLink>
                </li>
                <li>
                  <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                  <NavLink to="/skills">Skills</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <FontAwesomeIcon
            onClick={handleNavIconClick}
            icon={faBars}
            size="2x"
          />
        )}
      </div>
    </div>
  );
}

export default HeaderMobile;
