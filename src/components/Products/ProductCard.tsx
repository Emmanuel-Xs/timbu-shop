import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Product } from "@/context/CartContext";
import { useCart } from "@/hooks/useCart";
import { useState } from "react";

export const ProductCard = ({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) => {
  const { state, dispatch } = useCart();
  const [isAnimating, setIsAnimating] = useState(false);

  const addToCart = () => {
    dispatch({ type: "ADD_TO_CART", product });
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const isInCart = state.items.some((item) => item.id === product.id);
  return (
    <div className={cn("", className)}>
      <img
        src={product.image}
        alt={product.name}
        className="object-cover max-h-[380px]"
      />
      <p className="text-primary2 text-lg lg:text-xl mt-2 font-medium">
        {product.name}
      </p>
      <div className="flex justify-between my-5 items-center">
        <p className="text-lg p-0 m-0">{product.price}</p>
        <Button
          className={cn(
            "",
            isAnimating ? "animate-pulse animate-duration-500" : ""
          )}
          onClick={addToCart}
          disabled={isInCart}
        >
          {isInCart ? "Added" : "Add to Cart"}
        </Button>
      </div>
    </div>
  );
};
