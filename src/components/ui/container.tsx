import { cn } from "@/lib/utils";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("w-[min(100%_-_3rem,145ch)] mx-auto", className)}>
      {children}
    </div>
  );
};
