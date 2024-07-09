import { useEffect } from "react";

export const useLockBodyScroll = (
  isLocked: boolean,
  scrollbarWidth: number
) => {
  useEffect(() => {
    if (isLocked) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.paddingRight = "";
      document.body.style.overflow = "";
    };
  }, [isLocked, scrollbarWidth]);
};
