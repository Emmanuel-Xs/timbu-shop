// PaymentInfoBottomCard.tsx
import { useNavigate } from "react-router-dom";
import { PaymentForm } from "./PaymentForm";
import { useClickAway } from "@uidotdev/usehooks";
import { cn } from "@/lib/utils";

interface PaymentInfoBottomCardProps {
  on: boolean;
  toggle: (val: boolean) => void;
  className?: string;
}

export const PaymentInfoBottomCard: React.FC<PaymentInfoBottomCardProps> = ({
  on,
  toggle,
  className,
}) => {
  const navigate = useNavigate();

  const closeBottomNav = () => {
    toggle(false);
    navigate("/");
  };

  const ref = useClickAway(closeBottomNav) as React.RefObject<HTMLElement>;

  return (
    <section
      className={cn(
        "fixed bottom-0 w-full min-h-screen isolate z-50",
        className
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-b from-transparent/10 to-transparent/70",
          on ? "block" : "hidden"
        )}
      ></div>
      <aside
        ref={ref}
        className={cn(
          "bg-secondary w-full min-h-[600px] transition-transform duration-200 ease-linear will-change-transform absolute bottom-0",
          on ? "-translate-y-0" : "-translate-y-full"
        )}
      >
        <PaymentForm />
      </aside>
    </section>
  );
};
