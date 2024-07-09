import { cn } from "@/lib/utils";
import { PaymentForm } from "./PaymentForm";
export const PaymentInfoCard = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        "bg-primary2 text-secondary rounded-3xl min-h-[600px] w-[700px] lg:w-[400px] max-w-[90%]",
        className
      )}
    >
      <PaymentForm />
    </div>
  );
};
