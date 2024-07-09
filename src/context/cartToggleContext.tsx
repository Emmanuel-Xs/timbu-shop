import { useToggle } from "@uidotdev/usehooks";
import { createContext } from "react";

export interface CartToggleContextType {
  on: boolean;
  toggle: (val: boolean) => void;
}

export const CartToggleContext = createContext<CartToggleContextType | null>(
  null
);

export const CartToggleContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [on, toggle] = useToggle(false);

  return (
    <CartToggleContext.Provider value={{ on, toggle }}>
      {children}
    </CartToggleContext.Provider>
  );
};
