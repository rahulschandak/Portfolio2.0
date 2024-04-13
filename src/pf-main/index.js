import React from "react";
import Header from "./components/header/header";
import Body from "./components/routes/routes";
import "../App.css";
import { ScreenSizeProvider } from "./components/common/screen-size";
import Footer from "./components/footer/footer";

function Portfolio() {
  return (
    <ScreenSizeProvider>
      <Header />
      <hr />
      <Body />
      <Footer />
    </ScreenSizeProvider>
  );
}

export default Portfolio;
