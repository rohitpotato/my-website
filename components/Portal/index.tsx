import ReactDOM from "react-dom";
const { useState, useRef, useEffect } = require("react");

const portalId = "portal-root";
const getPortlaNode = (selector: string = "") => {
  const id = selector || portalId;
  const portal = document.getElementById(id);
  if (!portal) {
    const newPortal = document.createElement("div");
    newPortal.id = id;
    document.body.appendChild(newPortal);
    return newPortal;
  }
  return portal;
};

const removePortal = (selector: string = "") => {
  const portal = document.getElementById(selector);
  if (document.body.contains(portal)) {
    // @ts-ignore
    document.body.removeChild(portal);
  }
};

interface Portal {
  selector?: string;
}

const Portal: React.FC<Portal> = ({ children, selector }) => {
  const el = useRef(null);
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    el.current = getPortlaNode(selector);
    setMounted(true);
    return () => {
      removePortal(selector);
    };
  }, [selector]);

  return mounted ? ReactDOM.createPortal(children, el.current) : null;
};

export default Portal;
