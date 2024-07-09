import { createContext, useReducer } from "react";

export type Product = {
  id: number;
  image: string;
  name: string;
  price: string;
};

type CartItem = Product;

type CartState = {
  items: CartItem[];
  totalNumber: number;
  totalPrice: number;
};

type CartAction = {
  type: "ADD_TO_CART" | "REMOVE_FROM_CART" | "RESET_CART";
  product?: Product; // Make product optional
};

const initialState: CartState = {
  items: [],
  totalNumber: 0,
  totalPrice: 0,
};

const cartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_TO_CART": {
      if (!action.product) return state;

      const existingItemIndex = state.items.findIndex(
        (item) => item.id === action.product?.id
      );

      if (existingItemIndex !== -1) {
        return state;
      }

      const newItem = { ...action.product };

      return {
        ...state,
        items: [...state.items, newItem],
        totalNumber: state.totalNumber + 1,
        totalPrice:
          state.totalPrice + parseFloat(action.product.price.replace("N", "")),
      };
    }

    case "REMOVE_FROM_CART": {
      if (!action.product) return state;

      const updatedItems = state.items.filter(
        (item) => item.id !== action.product?.id
      );

      return {
        ...state,
        items: updatedItems,
        totalNumber: state.totalNumber - 1,
        totalPrice:
          state.totalPrice - parseFloat(action.product.price.replace("N", "")),
      };
    }

    case "RESET_CART": {
      return {
        ...initialState,
      };
    }

    default:
      return state;
  }
};

export const CartContext = createContext<{
  state: CartState;
  dispatch: React.Dispatch<CartAction>;
}>({ state: initialState, dispatch: () => null });

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};
