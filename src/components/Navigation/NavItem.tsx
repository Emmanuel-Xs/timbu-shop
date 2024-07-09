import { cn } from "@/lib/utils";
import { Link, LinkProps } from "react-router-dom";

interface NavItemProps extends LinkProps {
  className?: string;
}

export const NavItem: React.FC<NavItemProps> = ({
  to,
  children,
  className,
  ...props
}) => {
  return (
    <li className={cn("text-lg font-medium", className)}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  );
};
