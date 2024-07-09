import { cn } from "@/lib/utils";

type TextInputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  label: string;
  id: string;
  placeholder: string;
  inverse?: boolean;
};

export const TextInputField: React.FC<TextInputFieldProps> = ({
  className,
  label,
  id,
  placeholder,
  inverse,
  ...props
}) => {
  return (
    <div className={cn("space-y-2 mt-6", className)}>
      <label htmlFor={id} className="text-sm lg:text-lg font-medium">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        id={id}
        className={cn(
          "w-full py-2",
          inverse
            ? "text-primary accent-primary"
            : "text-secondary accent-secondary"
        )}
        {...props}
      />
    </div>
  );
};
