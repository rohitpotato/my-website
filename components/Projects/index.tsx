import css from "./Projects.module.css";
import SectionHeader from "../SectionHeader";
import { ProjectCard } from "../ProjectCard";
import { useAppContext } from "../../context/AppContext";

const Projects: React.FC = () => {
  const { projects } = useAppContext();
  return (
    <div id="projects">
      <SectionHeader
        heading="PROJECTS"
        subHeading="Ready to see my work? Let’s dive into something good.."
      />
      <div className={css.projectsContainer}>
        {projects.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
