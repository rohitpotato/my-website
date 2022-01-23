import React, {
  createContext,
  FC,
  useContext,
  useEffect,
  useMemo,
} from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { applyTheme } from "../utils";

const ThemeContext = createContext({
  currentTheme: "",
  setCurrentTheme: () => {},
});

const useTheme = () => {
  const themeProps = useContext(ThemeContext);
  if (!themeProps) {
    throw new Error("Cannot find context!");
  }
  const { currentTheme, setCurrentTheme } = themeProps;
  return { currentTheme, setCurrentTheme };
};

const ThemeProvider: FC = ({ children }) => {
  console.log(typeof document !== "undefined" && document.body.dataset.theme);
  const [currentTheme, setCurrentTheme] = useLocalStorage(
    "theme",
    typeof window !== "undefined" ? document?.body?.dataset?.theme : null
  );

  useEffect(() => {
    applyTheme(currentTheme);
    setCurrentTheme(currentTheme);
  }, [currentTheme, setCurrentTheme]);

  const value = useMemo(
    () => ({
      currentTheme,
      setCurrentTheme,
    }),
    [currentTheme, setCurrentTheme]
  );
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export { useTheme, ThemeProvider };
