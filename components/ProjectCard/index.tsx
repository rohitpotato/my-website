import Image from "next/image";
import css from "./ProjectCard.module.css";
import { projects } from "../../types";

const imgUrl = "https://www.m.media-amazon.com/images/I/51GMCVO6tKL.jpg";

interface Props {
  project: projects;
}

export const ProjectCard: React.FC<Props> = (props) => {
  const { project } = props;
  const { title, description, imageLink, link } = project || {};
  return (
    <a href={link} target="_blank" rel="noreferrer" className={css.projectLink}>
      <div style={{ width: "100%", height: "215px", position: "relative" }}>
        <img
          src={imageLink}
          loading="lazy"
          alt="project-img"
          width={"100%"}
          height={"100%"}
          // layout="fixed"
          // layout="responsive"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={css.projectDetailsContainer}>
        <div className={css.projectHeading}>{title}</div>
        <div className={css.projectDescription}>{description}</div>
      </div>
    </a>
  );
};
