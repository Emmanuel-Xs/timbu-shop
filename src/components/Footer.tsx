import { scrollToTop } from "@/lib/utils";
import { Container } from "./ui/container";

export const Footer = () => {
  return (
    <div className="bg-primary2">
      <Container className="flex flex-col py-10 items-center justify-center">
        <a href="#" className="text-secondary" onClick={() => scrollToTop()}>
          Back to Top
        </a>
        <h2 className="text-secondary pt-4 text-2xl font-medium">
          No.1 Thrift
        </h2>
      </Container>
    </div>
  );
};
