import React from "react";
import Header from "../Header";
import containerCss from "./Container.module.css";

interface Props {}

const Container: React.FC<Props> = () => {
  return (
    <div className={containerCss.container}>
      <Header />
    </div>
  );
};
export default Container;
