import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Products } from "@/components/Products";
import { CartToggleContextProvider } from "@/context/cartToggleContext";
import { Outlet } from "react-router-dom";

export const Home = () => {
  return (
    <>
      <CartToggleContextProvider>
        <Outlet />
        <Header />
        <main>
          <Products />
        </main>
        <Footer />
      </CartToggleContextProvider>
    </>
  );
};
