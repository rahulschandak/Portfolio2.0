import React, { useEffect, useState } from "react";
import Header from "./components/header/header";
import Body from "./components/routes/routes";
import "../App.css";
import { ScreenSizeProvider } from "./components/common/screen-size";
import Footer from "./components/footer/footer";
import "bootstrap/dist/css/bootstrap.min.css";

function Portfolio() {
  const [showPopup, setShowPopup] = useState(true);
  useEffect(() => {
    const visitedBefore = localStorage.getItem("visitedBefore");
    if (!visitedBefore) {
      setShowPopup(true);
      localStorage.setItem("visitedBefore", "true");
    }
  }, []);

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <ScreenSizeProvider>
      <Header />
      <hr className="hr" />
      <div className="background-style">
        <Body />
        <Footer />
      </div>
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <p>
              This website is a ground-up creation, entirely designed from
              scratch by Rahul Chandak. (View this on a desktop for the best
              experience).
            </p>
            <p>
              It remains an ongoing project, constantly evolving with frequent
              updates to enhance its features and functionality.
            </p>
            <p>
              <button className="btn btn-primary" onClick={handlePopupClose}>
                Proceed to website
              </button>
            </p>
            <p>Looking to connect professionally? Drop a text on LinkedIn.</p>
            <button className="btn btn-primary">
              <a
                href="https://www.linkedin.com/in/rahulschandak/"
                target="_blank"
                rel="noopener noreferrer"
                className="wd-button-font"
              >
                LinkedIn
              </a>
            </button>
          </div>
        </div>
      )}
    </ScreenSizeProvider>
  );
}

export default Portfolio;
