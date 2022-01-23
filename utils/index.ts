import { themes } from "../constants";
const doesWindowExist = () => {
  return typeof window !== "undefined";
};

const doesLocalStorageExist = () => {
  if (doesWindowExist() && window.localStorage) {
    return true;
  }
  return false;
};

const doesDocumentExist = () => {
  if (doesWindowExist() && typeof document !== "undefined") {
    return true;
  }
  return false;
};

const setCSSVars = (property: string, value: string): void => {
  if (doesDocumentExist()) {
    document.documentElement.style.setProperty(property, value);
  }
};

const applyTheme = (currentTheme: string) => {
  const themeStyles = themes[currentTheme];
  for (let key in themeStyles) {
    setCSSVars(key, themeStyles[key]);
  }
  document.body.dataset.theme = currentTheme;
};

export {
  doesWindowExist,
  doesLocalStorageExist,
  doesDocumentExist,
  applyTheme,
};
