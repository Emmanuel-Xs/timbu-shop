// Checkout.tsx
import React, { useEffect } from "react";
import { Header } from "@/components/Header";
import { PaymentInfoBottomCard } from "@/components/PaymentInfoBottomCard";
import { PaymentInfoCard } from "@/components/PaymentInfoCard";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { useMediaQuery, useToggle } from "@uidotdev/usehooks";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/useCart";
import { EmptyCartMsg } from "@/components/EmptyCartMsg";
import { CartItem } from "@/components/CartItem";

export const Checkout: React.FC = () => {
  const navigate = useNavigate();
  const [ontoggleBottomNav, toggleBottomNav] = useToggle(false);
  const { state } = useCart();
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");

  useEffect(() => {
    if (!isSmallDevice) toggleBottomNav(false);
  }, [isSmallDevice, toggleBottomNav]);

  return (
    <section className="w-full max-h-screen">
      <Header />
      <Container className="py-5">
        <div className="flex gap-5 items-center">
          <ArrowLeft
            onClick={() => navigate("/")}
            className="cursor-pointer"
            size={25}
          />
          <h1 className="font-medium text-2xl lg:text-3xl">Checkout</h1>
        </div>
        <div className="mt-10 flex justify-between gap-5 items-center">
          <div className="basis-full lg:basis-2/3">
            {state.items.length === 0 ? (
              <EmptyCartMsg />
            ) : (
              <>
                <div className="divide-y-[1px] divide-border border border-border h-[289px] sm:h-[388px] overflow-y-auto">
                  {state.items.map((product, index) => (
                    <CartItem key={index} product={product} className="px-5" />
                  ))}
                </div>
                <div className="text-xl flex flex-col items-center gap-5 font-semibold mt-10 mx-10">
                  <div className="flex items-center justify-between w-full">
                    <span>Total</span>
                    <span>N{state.totalPrice}</span>
                  </div>
                  <Button
                    className="bg-primary2 text-secondary py-2 w-full max-w-[500px] mt-5 md:hidden"
                    onClick={() => toggleBottomNav(true)}
                  >
                    Pay
                  </Button>
                </div>
              </>
            )}
          </div>
          <PaymentInfoCard className="hidden md:block" />
        </div>
      </Container>
      {ontoggleBottomNav && (
        <PaymentInfoBottomCard
          on={ontoggleBottomNav}
          toggle={toggleBottomNav}
          className="md:hidden"
        />
      )}
    </section>
  );
};
