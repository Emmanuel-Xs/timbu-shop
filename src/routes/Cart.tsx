import { CartItem } from "@/components/CartItem";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { ProductInfo } from "@/data/Product";
import { useCartToggle } from "@/hooks/useCartToggle";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { useScrollbarWidth } from "@/hooks/useScrollbarWidth";
import { cn } from "@/lib/utils";
import { useClickAway } from "@uidotdev/usehooks";
import { ArrowLeftIcon } from "lucide-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
  const navigate = useNavigate();
  const { on, toggle } = useCartToggle();
  const scrollbarWidth = useScrollbarWidth();
  useLockBodyScroll(on, scrollbarWidth);

  const closeCart = () => {
    toggle(false);
    navigate("/");
  };

  const ref = useClickAway(closeCart) as React.RefObject<HTMLElement>;

  useEffect(() => {
    toggle(true);
  }, [toggle]);

  return (
    <section className={cn("fixed w-full min-h-svh isolate z-50")}>
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-b from-transparent/10 to-transparent/70",
          on ? "block" : "hidden"
        )}
      ></div>
      <aside
        ref={ref}
        className={cn(
          "h-full bg-secondary w-full transition-transform duration-200 ease-linear will-change-transform md:w-1/2 lg:w-[40%] absolute right-0",
          on ? "translate-x-0" : "translate-x-full transition-none"
        )}
      >
        <div className="h-full overflow-y-auto w-full">
          <Container className="py-5 pb-32 space-y-10">
            <div className="flex justify-between items-center">
              <ArrowLeftIcon
                onClick={closeCart}
                className="cursor-pointer"
                size={25}
              />
              <h1 className="mr-auto ml-2 font-medium text-xl lg:text-2xl">
                My Cart
              </h1>
              <p>3 items</p>
            </div>
            <div className="divide-y-[1px] divide-border border-y border-border">
              {ProductInfo.map((product, index) => (
                <CartItem
                  key={index}
                  name={product.name}
                  price={product.price}
                  img={product.image}
                />
              ))}
            </div>
          </Container>
        </div>
        <Container className="space-y-3 sticky bottom-0 bg-secondary w-full py-5">
          <p className="text-center mb-5">
            Subtotal of items in cart = <span>N7500</span>
          </p>
          <div className="flex gap-4 items-center justify-center">
            <Button
              className="rounded-3xl text-sm  py-[0.4rem]"
              onClick={closeCart}
              variant="outline"
            >
              Continue shopping
            </Button>
            <Button
              className="rounded-3xl text-sm py-[0.4rem]"
              onClick={() => {
                navigate("/checkout");
                toggle(false);
              }}
            >
              Checkout
            </Button>
          </div>
        </Container>
      </aside>
    </section>
  );
};
