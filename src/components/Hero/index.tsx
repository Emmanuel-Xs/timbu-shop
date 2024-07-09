import { Container } from "../ui/container";

export const Hero = () => {
  return (
    <div className="relative isolate bg-[url('src/assets/images/hero-img.webp')] bg-cover bg-no-repeat bg-top">
      <div className="absolute inset-0 -z-10 bg-gradient-to-l from-transparent/30 via-[#1e1e1e66] to-transparent/30" />
      <Container className="flex items-center min-h-[500px] lg:min-h-[550px] justify-center flex-col text-secondary font-semibold">
        <h1 className="text-4xl">Your No.1 plug for thrifts</h1>
        <p className="text-xl font-light">
          Purchase all kinds of thrift wears here at affordable prices
        </p>
        <button className="bg-secondary inline-flex items-center text-[#333333] py-1 px-5 rounded-3xl font-semibold text-lg md:text-lg mt-5">
          EXPLORE
        </button>
      </Container>
    </div>
  );
};
