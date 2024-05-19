import React from "react";
import "./skills-screen.css";
import BodyLabel from "../../components/common/body-label";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faScrewdriverWrench } from "@fortawesome/free-solid-svg-icons";

function SkillsScreen() {
  const heading = " Tools and Frameworks I have worked with: ";
  const programmingLanguagesHeading = "1. Programming Languages";
  const databaseHeading = "2. Databases";
  const webTechnologiesHeading = "3. Web Technologies";
  const toolsHeading = "4. Tools";

  const skillsProgLang = [
    {
      id: 1,
      name: "Java",
      image: require("./images/Java.png"),
    },
    {
      id: 2,
      name: "JavaScript",
      image: require("./images/JS.png"),
    },
    {
      id: 3,
      name: "TypeScript",
      image: require("./images/TS.png"),
    },
    {
      id: 4,
      name: "Python",
      image: require("./images/Python.png"),
    },
    {
      id: 5,
      name: "CSharp",
      image: require("./images/CSharp.png"),
    },
  ];

  const skillsDatabase = [
    {
      id: 1,
      name: "MySQL",
      image: require("./images/MySQL.png"),
    },
    {
      id: 2,
      name: "PLSQL",
      image: require("./images/PLSQL.png"),
    },
    {
      id: 3,
      name: "MongoDB",
      image: require("./images/MongoDB.png"),
    },
  ];

  const skillsTools = [
    {
      id: 1,
      name: "Visual Studio",
      image: require("./images/VS.png"),
    },
    {
      id: 2,
      name: "IntelliJ",
      image: require("./images/IntelliJ.png"),
    },
    {
      id: 3,
      name: "GIT",
      image: require("./images/GIT.png"),
    },
    {
      id: 3,
      name: "GITHUB",
      image: require("./images/GitHub.png"),
    },
    {
      id: 3,
      name: "Docker",
      image: require("./images/Docker.png"),
    },
    {
      id: 4,
      name: "Kubernetes",
      image: require("./images/Kubernetes.png"),
    },
    {
      id: 8,
      name: "Postman",
      image: require("./images/Postman.png"),
    },
    {
      id: 8,
      name: "AWS",
      image: require("./images/AWS.png"),
    },
    {
      id: 6,
      name: "MySQLWorkbench",
      image: require("./images/MySQLWorkbench.png"),
    },
    {
      id: 7,
      name: "Jenkins",
      image: require("./images/Jenkins.png"),
    },
    {
      id: 8,
      name: "Axure",
      image: require("./images/Axure.png"),
    },
    {
      id: 9,
      name: "Figma",
      image: require("./images/Figma.png"),
    },
  ];

  const skillsWebTech = [
    {
      id: 1,
      name: "HTML",
      image: require("./images/HTML.png"),
    },
    {
      id: 2,
      name: "CSS",
      image: require("./images/CSS.png"),
    },
    {
      id: 3,
      name: "Bootstrap",
      image: require("./images/Bootstrap.png"),
    },
    {
      id: 4,
      name: "ReactJS",
      image: require("./images/ReactJS.png"),
    },
    {
      id: 5,
      name: "NodeJS",
      image: require("./images/Node.png"),
    },
  ];

  return (
    <div className="skills-container">
      <BodyLabel className="h2 header-style">
        <FontAwesomeIcon icon={faScrewdriverWrench} /> &nbsp;
        {heading}
      </BodyLabel>
      <BodyLabel className="h3">{programmingLanguagesHeading}</BodyLabel>
      <div className="skills-style">
        {skillsProgLang.map((data) => (
          <img loading="lazy" className="image-style-skill" alt={data.name} src={data.image} />
        ))}
      </div>
      <BodyLabel className="h3">{databaseHeading}</BodyLabel>
      <div className="skills-style">
        {skillsDatabase.map((data) => (
          <img loading="lazy" className="image-style-skill" alt={data.name} src={data.image} />
        ))}
      </div>
      <BodyLabel className="h3">{webTechnologiesHeading}</BodyLabel>
      <div className="skills-style">
        {skillsWebTech.map((data) => (
          <img loading="lazy" className="image-style-skill" alt={data.name} src={data.image} />
        ))}
      </div>
      <BodyLabel className="h3">{toolsHeading}</BodyLabel>
      <div className="skills-style">
        {skillsTools.map((data) => (
          <img loading="lazy" className="image-style-skill" alt={data.name} src={data.image} />
        ))}
      </div>
    </div>
  );
}
export default SkillsScreen;
