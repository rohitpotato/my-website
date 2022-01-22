import { createContext, FC, useContext, useEffect, useMemo } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { doesDocumentExist } from "../utils";

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
  const [currentTheme, setCurrentTheme] = useLocalStorage(
    "theme",
    doesDocumentExist() ? document?.body?.dataset?.theme : "light"
  );

  useEffect(() => {
    if (doesDocumentExist()) {
      document.body.dataset.theme = currentTheme;
      setCurrentTheme(currentTheme);
    }
  }, [currentTheme, setCurrentTheme]);

  const value = useMemo(
    () => ({
      currentTheme,
      setCurrentTheme,
    }),
    [currentTheme, setCurrentTheme]
  );
  console.log("value", value);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};

export { useTheme, ThemeProvider };
