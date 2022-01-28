import Link from "next/link";
import headerCss from "./Header.module.css";
import { links } from "../../constants";
import { ThemeToggle } from "../ThemeToggle";

const Header: React.FC = () => {
  return (
    <div className={headerCss.container}>
      <div className={headerCss.logo}>RK</div>
      <div className={headerCss.links}>
        {links.map(({ name, link, target = "_self", class: className }) => (
          <Link href={link} passHref key={name}>
            <a
              target={target}
              className={[headerCss.link, className].join(" ")}
            >
              {name}
            </a>
          </Link>
        ))}
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Header;
