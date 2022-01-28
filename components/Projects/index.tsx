import css from "./Projects.module.css";
import SectionHeader from "../SectionHeader";
import { ProjectCard } from "../ProjectCard";

const Projects: React.FC = () => {
  return (
    <div>
      <SectionHeader
        heading="PROJECTS"
        subHeading="Ready to see my work? Let’s dive into something good.."
      />
      <div className={css.projectsContainer}>
        {[1, 2, 3, 4].map((el) => (
          <ProjectCard key={el} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
