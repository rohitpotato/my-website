import { useTheme } from "../../context/ThemeContext";

const ThemeToggle: React.FC = (props) => {
  const { currentTheme, setCurrentTheme } = useTheme();
  return (
    <div>
      <button
        onClick={() => {
          // @ts-ignore
          setCurrentTheme(currentTheme === "light" ? "dark" : "light");
        }}
        type="button"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export { ThemeToggle };
