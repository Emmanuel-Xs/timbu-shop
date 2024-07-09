import { cn } from "@/lib/utils";

type RadioInputFieldProps = React.InputHTMLAttributes<HTMLInputElement> & {
  className?: string;
  name: string;
  id: string;
  label: string;
};

export const RadioInputField: React.FC<RadioInputFieldProps> = ({
  className,
  name,
  id,
  label,
  ...props
}) => {
  return (
    <div className={cn("space-x-2", className)}>
      <input
        type="radio"
        name={name}
        id={id}
        value={label}
        className="accent-secondary"
        {...props}
      />
      <label htmlFor={id} className="text-lg font-semibold">
        {label}
      </label>
    </div>
  );
};
