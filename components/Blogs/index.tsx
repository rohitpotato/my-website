import css from "./Blogs.module.css";
import SectionHeader from "../SectionHeader";
import { ProjectCard } from "../ProjectCard";
import { useAppContext } from "../../context/AppContext";

const Blogs: React.FC = () => {
  const { blogs } = useAppContext();
  return (
    <div id="blogs" className={css.container}>
      <SectionHeader
        heading="Blogs"
        subHeading="Ready to see some writing..?"
      />
      <div className={css.blogsContainer}>
        {blogs.map((blog) => (
          <ProjectCard project={blog} key={blog.title} />
        ))}
      </div>
    </div>
  );
};

export default Blogs;
