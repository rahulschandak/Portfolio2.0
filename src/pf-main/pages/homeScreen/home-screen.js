import React, { useContext } from "react";
import ScreenSizeContext from "../../components/common/screen-size";
import BodyLabel from "../../components/common/body-label";
import "./home-screen.css";

function HomeScreen() {
  const { isDesktop } = useContext(ScreenSizeContext);

  const heading = "Hello World,";
  const subHeading = "I am Rahul Chandak";
  const subTitle = "A Master's in Computer Science student at NEU";

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

  return isDesktop ? (
    <div className="page-container">
      <div className="text-container">
        <BodyLabel className="h2">{heading}</BodyLabel>
        <BodyLabel className="h2">{subHeading}</BodyLabel>
        <BodyLabel className="body-text-small padding-top">
          {subTitle}
        </BodyLabel>
        <div className="social-media-container">
          {socialMediaData.map((socialMedia) => (
            <a href={socialMedia.link} target="_blank" rel="noreferrer">
              <img
                src={socialMedia.source}
                className="social-media-style"
                alt={socialMedia.name}
              />
            </a>
          ))}
        </div>
        <a href="https://tinyurl.com/rscBio" target="_blank" rel="noreferrer">
          <button className="button-style"> Resume </button>
        </a>
      </div>
      <div className="image-container">
        <img
          src="images\ProfilePic.png"
          className="img-style"
          alt="Profile Pic"
        />
      </div>
    </div>
  ) : (
    <div className="page-container-mobile">
      <div className="image-container-mobile">
        <img
          src="images\ProfilePic.png"
          className="img-style"
          alt="Profile Pic"
        />
      </div>
      <div className="text-container-mobile">
        <BodyLabel className="h3">{heading}</BodyLabel>
        <BodyLabel className="h3">{subHeading}</BodyLabel>
        <BodyLabel className="body-text-small padding-top">
          {subTitle}
        </BodyLabel>
        <div className="social-media-container">
          {socialMediaData.map((socialMedia) => (
            <a href={socialMedia.link} target="_blank" rel="noreferrer">
              <img
                src={socialMedia.source}
                className="social-media-style"
                alt={socialMedia.name}
              />
            </a>
          ))}
        </div>
        <button className="button-style"> Resume </button>
      </div>
    </div>
  );
}
export default HomeScreen;
