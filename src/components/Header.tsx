import { ShoppingCart } from "lucide-react";
import { Container } from "./ui/container";
import { useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { useCart } from "@/hooks/useCart";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const Header = () => {
  const navigate = useNavigate();
  const { state } = useCart();

  const [isBouncing, setIsBouncing] = useState(false);

  useEffect(() => {
    if (state.totalNumber > 0) {
      setIsBouncing(true);
      setTimeout(() => setIsBouncing(false), 500);
    }
  }, [state.totalNumber]);
  return (
    <header className="py-4">
      <Container className="flex justify-between items-center">
        <h3
          className="text-xl sm:text-2xl font-medium cursor-pointer"
          onClick={() => navigate("/")}
        >
          No.1 Thrift Store
        </h3>
        <div className="flex md:gap-5 items-center">
          <div className="relative">
            <ShoppingCart
              size={30}
              onClick={() => navigate("/cart")}
              className="cursor-pointer text-cartBlue"
            />
            <small
              className={cn(
                "absolute -top-2 -right-2 text-cartBlue font-medium",
                isBouncing ? "animate-heartBeat animate-duration-500" : ""
              )}
            >
              {state.totalNumber > 0 && state.totalNumber}
            </small>
          </div>
          <Button
            className="hidden md:inline-flex text-lg lg:text-xl rounded-3xl"
            onClick={() => window.scrollTo(80, 80)}
          >
            Explore
          </Button>
        </div>
      </Container>
    </header>
  );
};
