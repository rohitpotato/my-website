import Image from "next/image";
import { useTheme } from "../../context/ThemeContext";
import buttonCss from "./ThemeToggle.module.css";

const ThemeToggle: React.FC = () => {
  const { currentTheme, setCurrentTheme } = useTheme();
  return (
    <div>
      <button
        onClick={() => {
          setCurrentTheme(currentTheme === "light" ? "dark" : "light");
        }}
        type="button"
        className={buttonCss.btn}
      >
        <Image
          src={currentTheme === "dark" ? "/icons/sun.png" : "/icons/moon.png"}
          height={24}
          width={24}
          alt="theme-switch-icon"
        />
      </button>
    </div>
  );
};

export { ThemeToggle };
