import { cn } from "@/lib/utils";
import { Container } from "../ui/container";
import { Button } from "../ui/button";
import { RadioInputField } from "./RadioInputField";
import { TextInputField } from "./TextInputField";
import { SuccessModal } from "../SuccessModal";
import { useToggle } from "@uidotdev/usehooks";
import { useNavigate } from "react-router-dom";
import { useCart } from "@/hooks/useCart";

export const PaymentForm = ({
  className,
  inverse,
}: {
  className?: string;
  inverse?: boolean;
  }) => {
  const { dispatch} =useCart()
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
    dispatch({type: "RESET_CART"})
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
          <h2 className="font-semibold text-2xl md:text-3xl mb-10">
            Payment Info
          </h2>
          <div className="space-y-4">
            <p className="text-[15px] md:text-lg font-medium">Payment Method</p>
            <div className="space-y-2">
              <RadioInputField
                name="paymentMethod"
                id="creditCard"
                label="Credit Card"
                inverse={inverse}
              />
              <RadioInputField
                name="paymentMethod"
                id="payPal"
                label="PayPal"
                inverse={inverse}
              />
            </div>
          </div>
          <TextInputField
            id="cardName"
            placeholder="Enter Name..."
            label="Name on Card"
            inverse={inverse}
          />
          <TextInputField
            placeholder=". . . . &nbsp; &nbsp; &nbsp;. . . . &nbsp; &nbsp; &nbsp;. . . . &nbsp; &nbsp; &nbsp; 1234"
            id="cardNumber"
            label="Card Number"
            inverse={inverse}
          />
          <div className="flex gap-4">
            <TextInputField
              placeholder="DD/MM/YYYY"
              type="date"
              id="expirationDate"
              label="Expiration Date"
              className="basis-2/3 space-y-2"
              inverse={inverse}
            />
            <TextInputField
              placeholder="321"
              id="cvv"
              label="CVV"
              className="basis-1/3 space-y-2"
              inverse={inverse}
            />
          </div>
          <Button
            variant="secondary"
            className={cn(
              "w-full mt-6 py-2 font-semibold",
              inverse ? "bg-primary2 text-secondary" : ""
            )}
          >
            Pay
          </Button>
        </Container>
      </form>
    </>
  );
};
