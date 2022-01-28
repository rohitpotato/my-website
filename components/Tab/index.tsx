import React, { useContext, useMemo, useRef, useState } from "react";

interface TabsProps {
  lazy?: "keepMounted" | boolean;
  initialIndex?: number;
}

const TabsContext = React.createContext<TabsProps>({
  lazy: false,
  initialIndex: 0,
});

const getValidChildren = (children: React.ReactNode): React.ReactNode => {
  return React.Children.map(children, (child) => {
    return React.isValidElement(child) ? child : null;
  });
};

interface TabContext {
  activeIndex: number;
  lazy: boolean | string;
  setActiveIndex: Function;
}

const useTabContext = (): TabContext => {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Need context");
  }
  const { activeIndex, lazy, setActiveIndex } = context;
  return { activeIndex, lazy, setActiveIndex };
};

const Tabs: React.FC<TabsProps> = (props) => {
  const { children, lazy = false, initialIndex = 0 } = props;
  const [activeIndex, setActiveIndex] = useState(initialIndex);
  const values = useMemo(
    () => ({
      lazy,
      activeIndex,
      setActiveIndex,
    }),
    [activeIndex, lazy]
  );

  return (
    <TabsContext.Provider value={values}>
      <div style={{ width: "100%" }}>{children}</div>
    </TabsContext.Provider>
  );
};

const TabList: React.FC = ({ children, ...rest }) => {
  const validChildren = getValidChildren(children);
  const childrenWithProps = React.Children.map(
    validChildren,
    (child, index) => {
      return React.cloneElement(child as React.ReactElement<any>, {
        index,
      });
    }
  );
  return (
    <div style={{ display: "flex", gap: "1rem" }} {...rest}>
      {childrenWithProps}
    </div>
  );
};

interface TabProps {
  index: number;
  selectedStyles: React.CSSProperties;
}

const Tab: React.FC<TabProps> = ({
  children,
  index,
  selectedStyles,
  ...rest
}) => {
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
      {...rest}
    >
      {children}
    </div>
  );
};

const TabPanels: React.FC = ({ children, ...rest }) => {
  const validChildren = React.Children.map(
    getValidChildren(children),
    (child, index) => {
      return React.cloneElement(child as React.ReactElement<any>, {
        index,
      });
    }
  );
  return (
    <div style={{ display: "block" }} {...rest}>
      {validChildren}
    </div>
  );
};

interface TabPanelProps {
  index: number;
}

const TabPanel: React.FC<TabPanelProps> = ({ children, index, ...props }) => {
  const { activeIndex, lazy } = useTabContext();
  const hasBeenSelected = useRef(false);
  const selected = activeIndex === index;
  if (selected) {
    hasBeenSelected.current === true;
  }

  const shouldRenderChildren = () => {
    if (selected) {
      return true;
    }

    if (!lazy) {
      return true;
    }

    if (hasBeenSelected && lazy === "keepMounted") {
      return true;
    }

    return false;
  };
  return (
    <div style={{ display: !selected ? "none" : "block" }} {...props}>
      {shouldRenderChildren() && children}
    </div>
  );
};

export { Tabs, Tab, TabList, TabPanels, TabPanel };
