import { cn } from "@/lib/utils";

type TextInputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  label: string;
  id: string;
  placeholder: string;
};

export const TextInputField: React.FC<TextInputFieldProps> = ({
  className,
  label,
  id,
  placeholder,
  ...props
}) => {
  return (
    <div className={cn("space-y-2 mt-6", className)}>
      <label htmlFor={id} className="text-sm lg:text-lg">
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        id={id}
        className="w-full py-2 text-secondary accent-secondary"
        {...props}
      />
    </div>
  );
};
