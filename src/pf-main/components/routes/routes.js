import { Routes, Route } from "react-router";
import HomeScreen from "../../pages/homeScreen/home-screen";
import EducationScreen from "../../pages/educationScreen/education-screen";
import ProjectScreen from "../../pages/projectsScreen/project-screen";
import WorkScreen from "../../pages/workScreen/work-screen";
import AboutScreen from "../../pages/aboutScreen/about-screen";
import SkillsScreen from "../../pages/skillsScreen/skills-screen";
import ContactsScreen from "../../pages/contactScreen/contact-screen";
import "./routes.css";

function Body() {
  return (
    <div className="body-container">
      <Routes>
        <Route path="" element={<HomeScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/education" element={<EducationScreen />} />
        <Route path="/work" element={<WorkScreen />} />
        <Route path="/projects" element={<ProjectScreen />} />
        <Route path="/skills" element={<SkillsScreen />} />
        <Route path="/resume" element={<HomeScreen />} />
        <Route path="/contact" element={<ContactsScreen />} />
      </Routes>
    </div>
  );
}

export default Body;
