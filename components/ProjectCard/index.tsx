import Image from "next/image";
import css from "./ProjectCard.module.css";

const imgUrl = "https://www.m.media-amazon.com/images/I/51GMCVO6tKL.jpg";

const myLoader = ({ src }) => {
  return imgUrl;
};

export const ProjectCard: React.FC = () => {
  return (
    <a target="_blank">
      <div style={{ width: "100%", height: "215px" }}>
        <img
          // loader={
          //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbzSDluOJKhjn3hKPGGZHwraX4BGi3ewgX9w&usqp=CAU"
          // }
          src={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbzSDluOJKhjn3hKPGGZHwraX4BGi3ewgX9w&usqp=CAU"
          }
          alt="project-img"
          width={"100%"}
          height={"100%"}
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={css.projectDetailsContainer}>
        <div className={css.projectHeading}>Lorem Ipsum</div>
        <div className={css.projectDescription}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
          assumenda reiciendis laborum, voluptates voluptate delectus ipsum
          voluptatem modi quas iste debitis dolore mollitia quidem pariatur nisi
          nam molestiae, vero tempore?
        </div>
      </div>
    </a>
  );
};
