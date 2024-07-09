import { CartToggleContext } from "@/context/cartToggleContext";
import { useContext } from "react";

export const useCartToggle = () => {
  const context = useContext(CartToggleContext);
  if (!context) {
    throw new Error(
      "useCartToggle must be used within a CartToggleContextProvider"
    );
  }
  return context;
};
