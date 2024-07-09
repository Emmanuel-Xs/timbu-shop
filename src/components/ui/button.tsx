import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "cva";
import { forwardRef } from "react";
const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-medium transition-colors disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary2 text-secondary hover:bg-primary2/90",
        outline:
          "border border-primary2 bg-secondary hover:bg-primary2 text-primary2 hover:text-secondary",
        secondary: "bg-secondary text-primary2",
      },
      size: {
        default: "px-5 py-1",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
