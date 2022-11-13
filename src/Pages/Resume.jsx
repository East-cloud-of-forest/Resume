import Experience from "../components/Experience";
import Profile from "../components/Profile";
import ProjectSlide from "../components/ProjectSlide";
import Skill from "../components/Skill";

const Resume = ({ project }) => {
  return (
    <div className="Resume">
      <Profile />
      <Skill />
      <Experience />
      <ProjectSlide project={project} />
    </div>
  );
};

export default Resume;
