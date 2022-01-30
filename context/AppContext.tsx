import { createContext, useContext } from "react";
import { configApiResponse } from "../types";

const AppContext = createContext({});

const useAppContext = (): configApiResponse => {
  const data = useContext(AppContext);
  if (!data) {
    throw new Error("Requires App Context!");
  }
  return data;
};

interface AppContextProps {
  values: configApiResponse;
}

const AppProvider: React.FC<AppContextProps> = ({ values, children }) => {
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export { AppProvider, useAppContext };
