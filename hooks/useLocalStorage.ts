import { useState, useEffect, useRef } from "react";
import { doesLocalStorageExist } from "../utils";

interface config {
  serealize: Function;
  deserealize: Function;
}

function useLocalStorage(
  key: string,
  initialValue: any,
  config: config = {
    serealize: JSON.parse,
    deserealize: JSON.stringify,
  }
) {
  const { serealize = JSON.parse, deserealize = JSON.stringify } = config;
  const [value, setValue] = useState(() => {
    if (doesLocalStorageExist()) {
      const localStorageValue = localStorage.getItem(key);
      if (
        localStorageValue &&
        localStorageValue !== "undefined" &&
        localStorageValue !== "null"
      ) {
        return serealize(localStorageValue);
      }
      return typeof initialValue === "function" ? initialValue() : initialValue;
    }
    return initialValue;
  });
  const prevKeyRef = useRef("");

  useEffect(() => {
    if (prevKeyRef.current !== key) {
      localStorage.removeItem(prevKeyRef.current);
    }
    localStorage.setItem(key, deserealize(value));
    prevKeyRef.current = key;
  }, [value, key, deserealize]);

  return [value, setValue];
}

export default useLocalStorage;
