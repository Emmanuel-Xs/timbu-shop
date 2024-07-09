import { useEffect, useState } from "react";

const getScrollbarWidth = () => {
  const container = document.createElement("div");
  document.body.appendChild(container);

  container.style.overflow = "scroll";
  container.style.visibility = "hidden";
  container.style.width = "100px";
  container.style.position = "absolute";

  const inner = document.createElement("div");
  container.appendChild(inner);

  const scrollbarWidth = container.offsetWidth - inner.offsetWidth;

  document.body.removeChild(container);

  return scrollbarWidth;
};

export const useScrollbarWidth = () => {
  const [scrollbarWidth, setScrollbarWidth] = useState(0);

  useEffect(() => {
    setScrollbarWidth(getScrollbarWidth());
  }, []);

  return scrollbarWidth;
};
