import css from "./Blogs.module.css";
import SectionHeader from "../SectionHeader";
import { ProjectCard } from "../ProjectCard";

const Blogs: React.FC = () => {
  return (
    <div className={css.container}>
      <SectionHeader
        heading="Blogs"
        subHeading="Ready to see some writing..?"
      />
      <div className={css.blogsContainer}>
        {[1, 2, 3, 4].map((el) => (
          <ProjectCard key={el} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
