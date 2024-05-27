import React, { useContext } from "react";
import "./footer.css";
import BodyLabel from "../common/body-label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import ScreenSizeContext from "../common/screen-size";

function Footer() {
  const { isDesktop } = useContext(ScreenSizeContext);

  const heading = "Rahul’s Portfolio";
  const subHeading =
    "Thanks for stopping by my portfolio! Let's connect on social media!";
  const quickLinks = "Quick Links";
  const contactInfo = "Contact Information";
  const email = "chandak.r@northeastern.edu";
  const phoneNo = "+1 857-313-1986";
  const location = "Boston, MA";
  const conclusionStatement =
    "Designed and Developed by Rahul Chandak | Last updated: May, 2024";

  const links = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "About",
      url: "/about",
    },
    {
      name: "Education",
      url: "/education",
    },
    {
      name: "Work",
      url: "/work",
    },
    {
      name: "Projects",
      url: "/projects",
    },
    {
      name: "Skills",
      url: "/skills",
    },
  ];

  const socialMediaData = [
    {
      name: "LinkedIn",
      source: "images/linkedIn.png",
      link: "https://www.instagram.com/rahulschandak/",
    },
    {
      name: "Github",
      source: "images/github.png",
      link: "https://www.github.com/rahulschandak",
    },
    {
      name: "Leetcode",
      source: "images/LC.png",
      link: "https://www.leetcode.com/u/rahulschandak/",
    },
    {
      name: "Instagram",
      source: "images/instagram.png",
      link: "https://www.instagram.com/rahul_chandak/",
    },
  ];

  return (
    <div className="footer-container">
      <div className="body-container-footer">
        <div className="first-column">
          <BodyLabel className="h3">{heading}</BodyLabel>
          <BodyLabel className="description-text">{subHeading}</BodyLabel>
          <br />
          <BodyLabel className="description-text">{phoneNo}</BodyLabel>
          <BodyLabel className="description-text">{email}</BodyLabel>
          <BodyLabel className="description-text">{location}</BodyLabel>
        </div>
        <div className="second-column">
          <div className="links-style">
            <BodyLabel className="h3">{quickLinks}</BodyLabel>
            <div className="links-wrapper">
              {links.map((link, index) => (
                <BodyLabel className="h5" key={index}>
                  <FontAwesomeIcon icon={faCircleRight} /> &nbsp;
                  <NavLink to={link.url}>{link.name}</NavLink>
                </BodyLabel>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="social-media-container-footer">
        {socialMediaData.map((socialMedia) => (
          <a href={socialMedia.link} target="_blank" rel="noreferrer">
            <img
              src={socialMedia.source}
              className="social-media-style-footer"
              alt={socialMedia.name}
            />
          </a>
        ))}
      </div>
      <br />
      <BodyLabel className="h4 conclusion-style">
        {conclusionStatement}
      </BodyLabel>
    </div>
  );
}

export default Footer;
