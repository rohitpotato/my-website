import headerCss from "./Header.module.css";
import { links } from "../../constants";
import { ThemeToggle } from "../ThemeToggle";

const Header: React.FC = () => {
  return (
    <div className={headerCss.container}>
      {links.map(({ name, link, target = "_self" }) => (
        <a className={headerCss.link} target={target} key={name} href={link}>
          {name}
        </a>
      ))}
      <ThemeToggle />
    </div>
  );
};

export default Header;
