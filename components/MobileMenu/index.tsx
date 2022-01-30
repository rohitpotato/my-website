import css from "./MobileMenu.module.css";
import Portal from "../Portal";
import { links } from "../../constants";
import { useAppContext } from "../../context/AppContext";

interface Props {
  isActive: boolean;
  toggleIsActive: () => void;
}

const MobileMenu: React.FC<Props> = ({ isActive, toggleIsActive }) => {
  const { resumeLink, spotify } = useAppContext();
  const handleNavigation = (link: string, target: string) => {
    console.log({ link });
    if (target === "_blank") {
      window.open(link, target);
    } else {
      window.location.assign(link);
    }
    toggleIsActive();
  };

  const getLink = (type: string, original: string): string => {
    const linkType = type.toLocaleLowerCase();
    if (linkType === "resume") {
      return resumeLink;
    } else if (linkType === "spotify") {
      return spotify;
    }

    return original;
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
              onClick={() => handleNavigation(getLink(name, link), target)}
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
