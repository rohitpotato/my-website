import Link from "next/link";
import { SetStateAction } from "react";
import css from "./MobileMenu.module.css";
import linkCss from "../Header/Header.module.css";
import Portal from "../Portal";
import { links } from "../../constants";

interface Props {
  isActive: boolean;
  toggleIsActive: () => void;
}

const MobileMenu: React.FC<Props> = ({ isActive, toggleIsActive }) => {
  const handleNavigation = (link: string, target: string) => {
    if (target === "_blank") {
      window.open(link, target);
    } else {
      window.location.assign(link);
    }
    toggleIsActive();
  };
  return (
    <Portal>
      {isActive && (
        <div className={css.container}>
          <button
            type="button"
            onClick={() => toggleIsActive()}
            className={css.closeMenu}
          >
            &times;
          </button>
          {links.map(({ name, link, target = "_self" }) => (
            <button
              onClick={() => handleNavigation(link, target)}
              className={css.link}
              key={name}
              type="button"
            >
              {name}
            </button>
          ))}
        </div>
      )}
    </Portal>
  );
};
export default MobileMenu;
