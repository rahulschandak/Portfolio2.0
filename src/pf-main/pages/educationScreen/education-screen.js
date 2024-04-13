import React, { useContext } from "react";
import ScreenSizeContext from "../../components/common/screen-size";
import BodyLabel from "../../components/common/body-label";
import "./education-screen.css";

function EducationScreen() {
  const { isDesktop } = useContext(ScreenSizeContext);

  const edData = [
    {
      university: "Northeastern University | Pursuing",
      image: "images\\NEU.png",
      details: [
        { field: "Degree", value: "Master of Science" },
        { field: "Major", value: "Computer Science" },
        { field: "Duration", value: "Sep 2022 - Dec 2024" },
        { field: "Location", value: "Boston, MA" },
        { field: "GPA", value: "3.91/ 4.0" },
      ],
    },
    {
      university: "University of Mumbai | Completed",
      image: "images\\MUM.png",
      details: [
        { field: "Degree", value: "Bachelor of Engg." },
        { field: "Major", value: "Electronics Engg." },
        { field: "Duration", value: "Aug 2016 - Oct 2020" },
        { field: "Location", value: "Mumbai, India" },
        { field: "GPA", value: "8.49/ 10.0" },
      ],
    },
  ];
  
  return isDesktop ? (
    <>
      <BodyLabel className="h3 header-style">My Education</BodyLabel>
      <div className="card-container">
        {edData.map((education) => (
          <div className="card-style">
            <img alt="University" src={education.image} className="img-style"></img>
            <div className="univ-name-style">
              <BodyLabel>{education.university}</BodyLabel>
            </div>
  
            {education.details.map((data) => (
              <div className="univ-details-style">
                <BodyLabel className="h4 field-style">{data.field}: </BodyLabel>
                <BodyLabel className="h4 value-style">{data.value}</BodyLabel>
              </div>
            ))}
  
            <div className="transcript-style">
              <BodyLabel className="h4">Transcript</BodyLabel>
            </div>
          </div>
        ))}
      </div>
    </>
  ) : (
    <div>Education Page Mobile</div>
  );
}
export default EducationScreen;
