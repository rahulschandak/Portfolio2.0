import React, { useContext } from "react";
import ScreenSizeContext from "../../components/common/screen-size";
import BodyLabel from "../../components/common/body-label";
import "./home-screen.css";

function HomeScreen() {
  const { isDesktop } = useContext(ScreenSizeContext);
  return isDesktop ? (
    <div className="page-container">
      <div className="text-container">
        <BodyLabel className="h2">Hello World,</BodyLabel>
        <BodyLabel className="h2">I am Rahul Chandak</BodyLabel>
        <BodyLabel className="body-text padding-top">
          A Master's in Computer Science student at NEU
        </BodyLabel>
        <div className="social-media-container">
          <img
            src="images\instagram.png"
            className="social-media-style"
            alt="Instagram"
          />
          <img
            src="images\twitter.png"
            className="social-media-style"
            alt="Twitter"
          />
          <img
            src="images\github.png"
            className="social-media-style"
            alt="GitHub"
          />
          <img
            src="images\linkedIn.png"
            className="social-media-style"
            alt="LinkedIn"
          />
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
        <BodyLabel className="h3">Hello World,</BodyLabel>
        <BodyLabel className="h3">I am Rahul Chandak</BodyLabel>
        <BodyLabel className="body-text padding-top">
          A Master's in Computer Science student at NEU
        </BodyLabel>
        <div className="social-media-container">
          <img
            src="images\instagram.png"
            className="social-media-style"
            alt="Instagram"
          />
          <img
            src="images\twitter.png"
            className="social-media-style"
            alt="Twitter"
          />
          <img
            src="images\github.png"
            className="social-media-style"
            alt="GitHub"
          />
          <img
            src="images\linkedIn.png"
            className="social-media-style"
            alt="LinkedIn"
          />
        </div>
        <button className="button-style"> Resume </button>
      </div>
    </div>
  );
}
export default HomeScreen;
