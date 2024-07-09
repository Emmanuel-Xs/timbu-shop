import { ProductInfo } from "@/data/Product";
import { ProductCard } from "./ProductCard";
import { Container } from "../ui/container";

export const Products = () => {
  return (
    <section id="products">
      <Container className="pt-10">
        <h3 className="font-semibold text-2xl text-primary2 sm:text-3xl pb-5">
          Available Products
        </h3>
        <div className="grid grid-cols-1 min-[500px]:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 place-items-center gap-10">
          {ProductInfo.map((product, index) => (
            <ProductCard
              key={index}
              name={product.name}
              price={product.price}
              img={product.image}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};
