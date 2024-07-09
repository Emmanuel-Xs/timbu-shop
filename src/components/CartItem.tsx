import { Product } from "@/context/CartContext";
import { useCart } from "@/hooks/useCart";
import { cn } from "@/lib/utils";

export const CartItem = ({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) => {
  const { dispatch } = useCart();

  const removeFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", product });
  };
  return (
    <div className={cn("flex gap-4 py-4", className)}>
      <img
        src={product.image}
        alt=""
        className="basis-[10%] md:basis-[20%] object-cover object-top size-16 md:size-24"
      />
      <div className="basis-[90%] md:basis-[80%]">
        <div className="flex justify-between">
          <p>{product.name}</p>
          <p>{product.price}</p>
        </div>
        <span
          className="text-red-500 text-sm cursor-pointer"
          onClick={removeFromCart}
        >
          remove
        </span>
      </div>
    </div>
  );
};
