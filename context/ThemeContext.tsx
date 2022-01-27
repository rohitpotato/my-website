import React, {
  createContext,
  FC,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
} from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { applyTheme, doesDocumentExist } from "../utils";

const ThemeContext = createContext({
  currentTheme: "",
  setCurrentTheme: () => {},
});

interface useTheme {
  currentTheme: string;
  setCurrentTheme: React.Dispatch<SetStateAction<string>>;
}

const useTheme = (): useTheme => {
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
    doesDocumentExist() ? document?.body?.dataset?.theme : null
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
