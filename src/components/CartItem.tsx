import { cn } from "@/lib/utils";

export const CartItem = ({
  img,
  price,
  name,
  className,
}: {
  img: string;
  price: string;
  name: string;
  className?: string;
}) => {
  return (
    <div className={cn("flex gap-4 py-4", className)}>
      <img
        src={img}
        alt=""
        className="basis-[10%] md:basis-[20%] object-cover object-top size-16 md:size-24"
      />
      <div className="basis-[90%] md:basis-[80%]">
        <div className="flex justify-between">
          <p>{name}</p>
          <p>{price}</p>
        </div>
        <span className="text-red-500 text-sm cursor-pointer">remove</span>
      </div>
    </div>
  );
};
