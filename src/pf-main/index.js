import React from "react";
import Header from "./components/header/header";
import Body from "./components/routes/routes";
import "../App.css";
import { ScreenSizeProvider } from "./components/common/screen-size";

function Portfolio() {
  return (
    <ScreenSizeProvider>
      <Header />
      <hr />
      <Body />
    </ScreenSizeProvider>
  );
}

export default Portfolio;
