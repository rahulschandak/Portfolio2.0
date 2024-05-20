import React, { useRef } from "react";
import Slider from "react-slick";
import "./project-screen.css";
import BodyLabel from "../../components/common/body-label";
import StringToBullets from "../../components/stringToBullets/stringToBullets";

function SimpleSlider() {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    pauseOnHover: true,
    centerPadding: "20px",
    slidesToShow: 2,
    speed: 500,
    dots: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const projectData = [
    {
      id: 0,
      title: "BREWCRITIC",
      tools: "React.js, Node.js, Bootstrap, MongoDB, RESTful API, Tailwind CSS",
      description:
        "Created RESTful Brewery review website using Node.js for backend, React.js for dynamic rendering and MongoDB for database.. Implemented features like multi-user authentication (Redux), activity monitoring, profile management, responsiveness, API integration and achieved load time under 1 second.",
      github: "https://www.github.com/rahulschandak/BrewCritic_Backend",
    },
    {
      id: 1,
      title: "RATEMYCOOP ",
      tools: "Axure RP 10, HCI life cycle",
      description:
        "Designed an interactive and informative mobile application using Axure RP implementing core design principles and HCI life cycle, from ideation to delivery, enabling students to share their internship experiences.. Created wireframes, conducted formative & heuristic evaluations, usability tests, summative evaluations, and iterations to complete the design using Axure RP 10.. Results included a System Usability Score of 87.5",
      github: "https://www.github.com/rahulschandak/RateMyCoop",
    },
    {
      id: 2,
      title: "STOCK PORTFOLIO TRACKER",
      tools: "Java, Swing, MVC, REST API",
      description:
        "Developed a prototype desktop application to perform CRUD operations using stocks using MVC architecture (in Java) involving various code design patterns and SOLID principles.. The user could create portfolios, view its value, cost basis, and performance graph.. Real-time prices of these stocks were fetched from the AlphaVantage API.. Intensive testing of the model and controller was carried out using JUnit 4.",
      github: "https://www.github.com/rahulschandak/Stock-Portfolio-Tracker",
    },
    {
      id: 3,
      title: "SUPERMARKET MANAGEMENT SYSTEM",
      tools: "MySQL, JDBC, Java, Swing",
      description:
        "Developed a full-stack desktop application simulating a supermarket management system where customers and employees can log in and perform dedicated tasks. Designed a relational database and performed 5 CRUD operations involving stored procedures, functions, and triggers. Utilized JDBC driver to integrate the database with GUI ensuring seamless data management and retrieval.",
      github: "https://github.com/rahulschandak/Supermarket-Management-System",
    },
    {
      id: 4,
      title: "COVER LETTER GENERATOR ",
      tools: "React.js, CSS",
      description:
        "Developed a full-stack desktop application simulating a supermarket management system where customers and employees can log in and perform dedicated tasks. Designed a relational database and performed 5 CRUD operations involving stored procedures, functions, and triggers. Utilized JDBC driver to integrate the database with GUI ensuring seamless data management and retrieval.",
      github: "https://www.github.com/rahulschandak/CoverLetterGen",
    },
    {
      id: 5,
      title: "PREDICTIVE ANALYTICS FOR DEPRESSION ",
      tools: "Python, NumPy, Pandas, Scikit-learn",
      description:
        "Carried out data tidying, data visualization, outlier detection, exploratory data analysis, and feature selection in an attempt to shortlist potential symptoms and reasons that can develop depression among individuals and help to identify them at an early stage. Used Python and trained 5 Supervised Machine Learning prediction models splitting the dataset in an 80:20 ratio (training vs test).",
      github:
        "https://www.github.com/rahulschandak/Predictive-Analytics-for-Depression",
    },
    {
      id: 6,
      title: "COVID-19 SUPPLIES ",
      tools: "Python, Django, Tkinter, SQLite3, HTML CSS",
      description:
        "An IIT Bombay Hackathon website project was created to help people to locate and find supplier details for any medical needs. The project filters out the medical shops and hospitals near the user's location and checks for the availability of the requirements posted by them. This project was made to help people during the COVID-19 pandemic.",
      github:
        "https://www.youtube.com/watch?v=dl6NbeQR7V0&ab_channel=HarshAgrawal",
    },
  ];

  return (
    <>
      <BodyLabel className="h2 header-style">My Projects</BodyLabel>
      <div className="slider-box slider-container">
        <Slider
          ref={(slider) => {
            sliderRef = slider;
          }}
          {...settings}
        >
          {projectData.map((project) => (
            <table key={project.id} className="slides-container">
              <tr className="card-header-row">
                <BodyLabel className="h4">{project.title}</BodyLabel>
              </tr>
              <tr className="card-tools-row">
                <BodyLabel className="h5">( {project.tools} )</BodyLabel>
              </tr>
              <tr className="card-description-row">
                <StringToBullets text={project.description} />
              </tr>
              <tr className="card-button-row">
                <button className="button-style">
                  <a href={project.github}>Github</a>
                </button>
              </tr>
            </table>
          ))}
        </Slider>
        <div style={{ textAlign: "center" }}>
          <button className="pagination-button-style" onClick={previous}>
            Prev
          </button>
          <button className="pagination-button-style" onClick={next}>
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default SimpleSlider;
