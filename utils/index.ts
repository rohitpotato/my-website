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

export { doesWindowExist, doesLocalStorageExist, doesDocumentExist };
