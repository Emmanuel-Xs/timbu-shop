import { NavItem } from "./NavItem";
import { cn } from "@/lib/utils";

const categoryLinks = [
  { to: "/", label: "Home" },
  { to: "/", label: "Products" },
  { to: "/", label: "FAQs" },
  { to: "/", label: "Contact" },
];

export const NavList = ({
  className,
  itemClassName,
  onClick,
}: {
  className?: string;
  itemClassName?: string;
  onClick?: () => void;
}) => {
  return (
    <menu className={cn("", className)}>
      {categoryLinks.map((item, index) => (
        <NavItem
          to={item.to}
          key={index}
          onClick={onClick}
          className={itemClassName}
        >
          {item.label}
        </NavItem>
      ))}
    </menu>
  );
};
