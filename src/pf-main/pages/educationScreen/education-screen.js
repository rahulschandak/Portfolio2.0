import React, { useContext } from "react";
import ScreenSizeContext from "../../components/common/screen-size";
import BodyLabel from "../../components/common/body-label";
import "./education-screen.css";
import Card from "../../components/common/card";

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
      transcript:
        "https://drive.google.com/file/d/12subWrxgFbvK-BjbaquHaqrRViKdELyQ/view",
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
      transcript:
        "https://drive.google.com/file/d/1VZNo-TjMDrdgvUj0aVDRl2JeM0yuCeWb/view",
    },
  ];

  return (
    <>
      <BodyLabel className="h3 header-style">My Education</BodyLabel>
      <div className={isDesktop ? "card-container" : "card-container-mobile"}>
        {edData.map((education) => (
          <Card img={education.image} title={education.university}>
            {education.details.map((data) => (
              <>
                <div className="univ-details-style">
                  <BodyLabel className="h5 field-style">
                    {data.field}:
                  </BodyLabel>
                  <BodyLabel className="h5 value-style">{data.value}</BodyLabel>
                </div>
              </>
            ))}
              <a
                href={education.transcript}
                target="_blank"
                rel="noreferrer"
                className="transcript-style"
              >
                Transcript
              </a>
          </Card>
        ))}
      </div>
    </>
  );
}
export default EducationScreen;
