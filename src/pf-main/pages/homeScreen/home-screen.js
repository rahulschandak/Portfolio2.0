import React, { useContext } from "react";
import ScreenSizeContext from "../../components/common/screen-size";
import BodyLabel from "../../components/common/body-label";
import './home-screen.css';

function HomeScreen() {
  const { isDesktop } = useContext(ScreenSizeContext);
  return isDesktop ? (
    <div className="page-container">
      <div className="text-container">
        <BodyLabel className="h2">Hello World</BodyLabel>
        <BodyLabel className="h2">I am Rahul Chandak</BodyLabel>
        <BodyLabel className="body-text padding-top">A master's in Computer Science student</BodyLabel>
      </div>
      <div className="image-container"><img alt="Profile Pic"></img></div>
    </div>
  ) : (
    <div>Home Page Mobile</div>
  );
}
export default HomeScreen;
