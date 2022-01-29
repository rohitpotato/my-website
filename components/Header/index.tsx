import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import css from "./Header.module.css";
import { links } from "../../constants";
import { ThemeToggle } from "../ThemeToggle";
import MobileMenu from "../MobileMenu";

const Header: React.FC = () => {
  const [isMobileMenuActive, setMobileMenuActive] = useState(false);

  const handleMobileMenuClick = () => {
    setMobileMenuActive((s) => !s);
  };

  return (
    <>
      <div className={css.container}>
        <div className={css.logo}>RK</div>
        <div className={css.links}>
          {links.map(({ name, link, target = "_self", class: className }) => (
            <Link href={link} passHref key={name}>
              <a
                target={target}
                className={[css.link, css[className]].join(" ")}
              >
                {name}
              </a>
            </Link>
          ))}
          <ThemeToggle />
          <button onClick={handleMobileMenuClick} className={css.menu}>
            <Image src={"/icons/menu.svg"} height={32} width={32} alt="menu" />
          </button>
        </div>
      </div>
      <MobileMenu
        isActive={isMobileMenuActive}
        toggleIsActive={setMobileMenuActive}
      />
    </>
  );
};

export default Header;
