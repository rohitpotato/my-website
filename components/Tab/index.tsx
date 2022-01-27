import React, { useContext, useMemo, useState } from "react";

const TabsContext = React.createContext();

const getValidChildren = (children) => {
  return React.Children.map(children, (child) => {
    return React.isValidElement(child) ? child : null;
  });
};

const useTabContext = () => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Need context");
  }
  return context;
};

const Tabs = ({ children, lazy = false, initialIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const values = {
    lazy,
    activeIndex,
    setActiveIndex,
  };

  return (
    <TabsContext.Provider value={values}>
      <div style={{ width: "100%" }}>{children}</div>
    </TabsContext.Provider>
  );
};

const TabList = ({ children, ...props }) => {
  const validChildren = getValidChildren(children);
  const childrenWithProps = React.Children.map(
    validChildren,
    (child, index) => {
      return React.cloneElement(child, {
        index,
      });
    }
  );
  return (
    <div style={{ display: "flex", gap: "1rem" }} {...props}>
      {childrenWithProps}
    </div>
  );
};

const Tab = ({ children, index, selectedStyles, ...props }) => {
  const { setActiveIndex, activeIndex } = useTabContext();
  const onClick = () => {
    setActiveIndex(index);
  };
  const stylesIfSelected = activeIndex === index ? selectedStyles : {};
  return (
    <div
      onClick={onClick}
      role="button"
      style={{ cursor: "pointer", ...stylesIfSelected }}
      {...props}
    >
      {children}
    </div>
  );
};

const TabPanels = ({ children, ...props }) => {
  const validChildren = React.Children.map(
    getValidChildren(children),
    (child, index) => {
      return React.cloneElement(child, {
        index,
      });
    }
  );
  return (
    <div style={{ display: "block" }} {...props}>
      {validChildren}
    </div>
  );
};

const TabPanel = ({ children, index, ...props }) => {
  const { activeIndex, lazy } = useTabContext();
  const isHidden = activeIndex !== index;
  const shouldRenderChildren = () => {
    if (activeIndex === index) {
      return true;
    }

    if (!lazy) {
      return true;
    }

    return false;
  };
  return (
    <div style={{ display: isHidden ? "none" : "block" }} {...props}>
      {shouldRenderChildren() && children}
    </div>
  );
};

export { Tabs, Tab, TabList, TabPanels, TabPanel };
