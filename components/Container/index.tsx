import React from "react";
import Header from "../Header";
import Hero from "../Hero";
import Experience from "../Experience";
import containerCss from "./Container.module.css";
import Projects from "../Projects";

const Container: React.FC = () => {
  return (
    <div>
      <Header />
      <div className={containerCss.heroContainer}>
        <Hero />
        <Experience />
        <Projects />
      </div>
    </div>
  );
};
export default Container;
