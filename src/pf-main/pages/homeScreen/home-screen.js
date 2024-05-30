import React, { useContext } from "react";
import ScreenSizeContext from "../../components/common/screen-size";
import BodyLabel from "../../components/common/body-label";
import "./home-screen.css";
import VerticalCarousel from "../../components/common/vertical-carousel";

function HomeScreen() {
  const { isDesktop } = useContext(ScreenSizeContext);

  const heading = "Hello World,";
  const subHeading = "I am Rahul Chandak";
  const subTitle = [
    "An MS-CS Student at NEU, Boston",
    "An SDE Intern at Liberty Mutual",
    "A Problem Solver",
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

  const renderFlipCard = () => {
    return (
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front">
            <img
              src="images\ProfilePic.png"
              className="img-style"
              alt="ProfilePic"
            />
          </div>
          <div className="flip-card-back">
            <img src="images\Logo_Dark.png" className="img-style" alt="Logo" />
          </div>
        </div>
      </div>
    );
  };

  return isDesktop ? (
    <div className="page-container">
      <div className="text-container">
        <BodyLabel className="h2">{heading}</BodyLabel>
        <BodyLabel className="h2">{subHeading}</BodyLabel>
        <VerticalCarousel>
          {subTitle.map((subTitle) => (
            <BodyLabel className="slider-style">{subTitle}</BodyLabel>
          ))}
        </VerticalCarousel>
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
      {/* <div className="image-container">
        <img
          src="images\ProfilePic.png"
          className="img-style"
          alt="Profile Pic"
        />
      </div> */}
      <div className="image-container">{renderFlipCard()}</div>
    </div>
  ) : (
    <div className="page-container-mobile">
      <div className="image-container-mobile">{renderFlipCard()}</div>
      <div className="text-container-mobile">
        <BodyLabel className="h3">{heading}</BodyLabel>
        <BodyLabel className="h3">{subHeading}</BodyLabel>
        <VerticalCarousel>
          {subTitle.map((subTitle) => (
            <BodyLabel className="slider-style">{subTitle}</BodyLabel>
          ))}
        </VerticalCarousel>
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
