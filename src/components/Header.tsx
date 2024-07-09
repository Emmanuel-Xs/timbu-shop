import { ShoppingCart } from "lucide-react";
import { Container } from "./ui/container";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";

export const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="py-3">
      <Container className="flex justify-between items-center">
        <h3
          className="text-xl sm:text-2xl font-medium cursor-pointer"
          onClick={() => navigate("/")}
        >
          No.1 Thrift Store
        </h3>
        <div className="flex md:gap-5 items-center">
          <ShoppingCart
            size={30}
            onClick={() => navigate("/cart")}
            className="cursor-pointer text-cartBlue"
          />
          <Link to="/#products">
            <Button className="hidden md:inline-flex text-lg lg:text-xl rounded-3xl">
              Explore
            </Button>
          </Link>
        </div>
      </Container>
    </header>
  );
};
