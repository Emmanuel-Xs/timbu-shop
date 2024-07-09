import { Button } from "./ui/button";
import { Container } from "./ui/container";
import { Modal, ModalProps } from "./ui/modal";
import SuccessSvg from "@/assets/images/success.svg";

type SuccessModalProps = Omit<ModalProps, "children">;

export const SuccessModal = ({
  open,
  onClose,
  className,
}: SuccessModalProps) => {
  return (
    <Modal open={open} onClose={onClose} className={className}>
      <Container className="py-10 w-[450px] max-w-[90%]">
        <div className="grid place-items-center">
          <img
            src={SuccessSvg}
            alt="success svg icon"
            className="mb-10 object-cover"
          />
          <h2 className="text-2xl font-medium">Successful</h2>
          <p className="font-light text-sm text-center text-border mb-3">
            Congratulations <br /> Your purchase was successful
          </p>
          <Button
            onClick={onClose}
            className="mt-5 bg-primary w-full max-w-[50%] font-semibold text-lg"
          >
            Home
          </Button>
        </div>
      </Container>
    </Modal>
  );
};
