import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <Container className="grid h-[100svh] place-items-center text-center">
      <div>
        <h1 className="mb-8 text-3xl font-semibold">Page not found</h1>
        <p className="sm:text-lg">We looked everywhere for this page.</p>
        <p className="sm:text-lg">
          Are you sure the URL is correct? Check and try again
        </p>
        <Button variant="outline" className="mt-5">
          <Link to="/">Go Back Home</Link>
        </Button>
      </div>
    </Container>
  );
};
