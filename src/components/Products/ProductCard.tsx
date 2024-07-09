import { cn } from "@/lib/utils";
import { Button } from "../ui/button";

export const ProductCard = ({
  img,
  name,
  price,
  className,
}: {
  img: string;
  name: string;
  price: string;
  className?: string;
}) => {
  return (
    <div className={cn("", className)}>
      <img src={img} alt={name} className="object-cover" />
      <p className="text-primary2 text-xl mt-2 font-medium">{name}</p>
      <div className="flex justify-between my-5 items-center">
        <p className="text-lg p-0 m-0">{price}</p>
        {/* <button className="bg-primary2 inline-flex items-center text-secondary py-[0.275rem] px-3 font-medium text-sm">
          Add to Cart
        </button> */}
        <Button className="">Add to Cart</Button>
      </div>
    </div>
  );
};
