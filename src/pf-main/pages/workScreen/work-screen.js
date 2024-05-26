import React, { useContext } from "react";
import ScreenSizeContext from "../../components/common/screen-size";
import BodyLabel from "../../components/common/body-label";
import "./work-screen.css";
import Card from "../../components/common/card";

function WorkScreen() {
  const { isDesktop } = useContext(ScreenSizeContext);
  const workData = [
    {
      organisation: "Liberty Mutual Insurance",
      image: "images\\LM.png",
      details: [
        { field: "Role", value: "SDE Intern" },
        { field: "Duration", value: "Jan 2024 - Present" },
        { field: "Location", value: "Boston, MA" },
        { field: "Tools", value: "ReactJS, NodeJS, GraphQL, PostgresSQL, Cypress, GitHub" },
      ],
    },
    {
      organisation: "Tata Consultancy Services",
      image: "images\\TCS.png",
      details: [
        { field: "Role", value: "Software Developer" },
        { field: "Duration", value: "Sep 2020 - July 2022" },
        { field: "Location", value: "Mumbai, India" },
        { field: "Tools", value: "C#, HTML, CSS, PL/ SQL, SOAP UI, .NET, GIT" },
      ],
    },
    // {
    //   organisation: "Camp K12",
    //   image: "images\\CK12.png",
    //   details: [
    //     { field: "Role", value: "Assistant Technical Intern" },
    //     { field: "Duration", value: "July 2018 - Sep 2018" },
    //     { field: "Location", value: "Mumbai, India" },
    //   ],
    // },
  ];
  return (
    <div className="work-container">
      <BodyLabel className="h3 header-style">My Professional Career</BodyLabel>
      <div className={isDesktop ? "card-container" : "card-container-mobile"}>
        {workData.map((education) => (
          <Card img={education.image} title={education.organisation}>
            {education.details.map((data) => (
              <>
                <div className="work-details-style">
                  <BodyLabel className="h5 field-style">
                    {data.field}:
                  </BodyLabel>
                  <BodyLabel className="h5 value-style">{data.value}</BodyLabel>
                </div>
              </>
            ))}
          </Card>
        ))}
      </div>
    </div>
  );
}
export default WorkScreen;
