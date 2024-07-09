import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import { Home } from "./routes/Home";
import { Checkout } from "./routes/Checkout";
import { Cart } from "./routes/Cart";
import { CartProvider } from "./context/CartContext";
import { NotFound } from "./routes/NotFound";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<NotFound />}>
      <Route path="/" element={<Home />}>
        <Route path="cart" element={<Cart />} />
      </Route>
      <Route path="checkout" element={<Checkout />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </React.StrictMode>
);
