import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./header.css";
import BodyLabel from "../common/body-label";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faBars, faCircleXmark } from "@fortawesome/free-solid-svg-icons";

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
      <div className="nav-icon" onClick={handleNavIconClick}>
        <FontAwesomeIcon
          onClick={handleNavIconClick}
          icon={showNavBar ? faCircleXmark : faBars}
          size="2x"
        />
        {showNavBar && (
          <div className={`navbar-container`}>
            <div className="navbar opened">
              <ul>
                <li>
                  <NavLink to="/">Home</NavLink>
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
        )}
      </div>
    </div>
  );
}

export default HeaderMobile;
