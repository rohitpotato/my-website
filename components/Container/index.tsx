import React from "react";
import Header from "../Header";
import Hero from "../Hero";
import Experience from "../Experience";
import containerCss from "./Container.module.css";
import Projects from "../Projects";
import Blogs from "../Blogs";
import Contact from "../Contact";
import { useAppContext } from "../../context/AppContext";

const Container: React.FC = () => {
  const { footerText, footerEnabled } = useAppContext();
  return (
    <div>
      <Header />
      <div className={containerCss.heroContainer}>
        <Hero />
        <Experience />
        <Projects />
        <Blogs />
        <Contact />
      </div>
      {footerEnabled && <div className={containerCss.footer}>{footerText}</div>}
    </div>
  );
};
export default Container;
