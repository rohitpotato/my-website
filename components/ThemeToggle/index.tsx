import { useTheme } from "../../context/ThemeContext";

const ThemeToggle: React.FC = (props) => {
  const { currentTheme, setCurrentTheme } = useTheme();
  console.log({ currentTheme, setCurrentTheme });
  console.log(currentTheme);
  return (
    <div>
      <button
        onClick={() => {
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
