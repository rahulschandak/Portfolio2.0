import React, { useContext } from "react";
import ScreenSizeContext from "../../components/common/screen-size";
import BodyLabel from "../../components/common/body-label";
import "./about-screen.css";

function AboutScreen() {
  const { isDesktop } = useContext(ScreenSizeContext);
  const heading = "My Story";
  const story = `Welcome to my corner of the internet! Ever since I stumbled upon my first computer, I was
  fascinated by the endless possibilities it offered. That curiosity
  quickly turned into a passion for coding and building things from
  scratch. Whether it's crafting sleek websites or developing handy
  applications, I'm driven by the desire to turn ideas into reality and
  make a positive impact through technology. Here, I share my journey, my
  projects, and my love for all things tech. Let's connect and create
  something amazing together!`;

  const present = "Present";
  const presentDesc = `Currently, I'm balancing an exciting career as a web developer at Liberty Mutual 
  Insurance while pursuing my master's in computer science at Northeastern University. At work, I get to 
  flex my creativity and problem-solving skills to build intuitive and efficient web applications. 
  Meanwhile, my studies at Northeastern are pushing my boundaries, and keeping me on the cutting edge of 
  technology. Life is busy, but incredibly rewarding, and I wouldn't have it any other way!`;

  const past = "Past";
  const pastDesc = `In my past life, I earned my bachelor's in electronics and spent two exciting years 
  at TCS as a software developer. It was a time of learning and growth, where I sharpened my coding skills 
  and got a taste of the tech industry's fast-paced world. Those experiences paved the way for my current 
  adventures in web development and my ongoing studies.`;

  const future = "Future";
  const futureDesc = `A world full of possibilities and exciting challenges. My goal is to continue pushing 
  the boundaries of web development. Maybe even starting my own venture one day. Ready for lifelong learning 
  and staying curious. The future is bright, and I'm excited to see where this journey takes me!`;

  const subHeading1 = "My Favourite Quote";
  const quote = `The process is more important than the result. The result is just a by-product of the process.`;
  const author = "- MS Dhoni";

  return (
    <div className="about-container">
      <div className="section-style">
        <BodyLabel className="h3">{heading}</BodyLabel>
        <BodyLabel className="description-text">{story}</BodyLabel>
        <div className={isDesktop ? "image-container-about" : "image-container-about-mobile"}>
          <img
            loading="lazy"
            className="image-style-about-1"
            alt="ProfilePic"
            src="/images/ProfilePic3.jpg"
          />
          <img
            loading="lazy"
            className="image-style-about-1"
            alt="ProfilePic"
            src="/images/Map.png"
          />
        </div>
      </div>

      <div className="section-style">
        <BodyLabel className="h3">{present}</BodyLabel>
        <BodyLabel className="description-text">{presentDesc}</BodyLabel>
        <div className={isDesktop ? "image-container-about" : "image-container-about-mobile"}>
          <img
            loading="lazy"
            className="image-style-about-2"
            alt="ProfilePic"
            src="/images/LM2.jpg"
          />
          <img
            loading="lazy"
            className="image-style-about-2"
            alt="ProfilePic"
            src="/images/Husky.png"
          />
        </div>
      </div>

      <div className="section-style">
        <BodyLabel className="h3">{past}</BodyLabel>
        <BodyLabel className="description-text">{pastDesc}</BodyLabel>
      </div>

      <div className="section-style">
        <BodyLabel className="h3">{future}</BodyLabel>
        <BodyLabel className="description-text">{futureDesc}</BodyLabel>
        <div className="image-container-about">
          <img
            loading="lazy"
            className="image-style-about-2"
            alt="ProfilePic"
            src="/images/QuestionMark.png"
          />
        </div>
      </div>

      <div className="section-style">
        <BodyLabel className="h3">{subHeading1}</BodyLabel>
        <BodyLabel className="description-text">{quote}</BodyLabel>
        <BodyLabel className="description-text">{author}</BodyLabel>
      </div>
    </div>
  );
}
export default AboutScreen;
