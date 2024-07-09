import { cn } from "@/lib/utils";
import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { RadioInputField } from "./RadioInputField";
import { TextInputField } from "./TextInputField";
import { SuccessModal } from "../SuccessModal";
import { useToggle } from "@uidotdev/usehooks";
import { useNavigate } from "react-router-dom";

export const PaymentForm = ({ className }: { className?: string }) => {
  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submitted");
    toggle(true);
  };

  const [on, toggle] = useToggle(false);

  const navigate = useNavigate();

  const closeModal = () => {
    toggle(false);
    navigate("/");
  };

  return (
    <>
      {on && <SuccessModal open={on} onClose={closeModal} />}
      <form
        action=""
        onSubmit={submitHandler}
        className={cn("mx-4", className)}
      >
        <Container className="my-8">
          <h2 className="font-semibold text-2xl lg:text-3xl mb-10">
            Payment Info
          </h2>
          <div className="space-y-4">
            <p className="text-[15px] lg:text-lg">Payment Method</p>
            <div className="space-y-2">
              <RadioInputField
                name="paymentMethod"
                id="creditCard"
                label="Credit Card"
              />
              <RadioInputField
                name="paymentMethod"
                id="payPal"
                label="PayPal"
              />
            </div>
          </div>
          <TextInputField
            id="cardName"
            placeholder="Enter Name..."
            label="Name on Card"
          />
          <TextInputField
            placeholder=". . . . &nbsp; &nbsp; &nbsp;. . . . &nbsp; &nbsp; &nbsp;. . . . &nbsp; &nbsp; &nbsp; 1234"
            id="cardNumber"
            label="Card Number"
          />
          <div className="flex gap-4">
            <TextInputField
              placeholder="DD/MM/YYYY"
              type="date"
              id="expirationDate"
              label="Expiration Date"
              className="basis-2/3 space-y-2"
            />
            <TextInputField
              placeholder="321"
              id="cvv"
              label="CVV"
              className="basis-1/3 space-y-2"
            />
          </div>
          <Button
            variant="secondary"
            className="w-full mt-6 py-2 font-semibold"
          >
            Pay
          </Button>
        </Container>
      </form>
    </>
  );
};
