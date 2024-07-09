import { useClickAway } from "@uidotdev/usehooks";
import { X } from "lucide-react";
import { NavList } from "./NavList";
import { cn } from "@/lib/utils";

export const MobileNav = ({
  on,
  closeNav,
}: {
  on: boolean;
  closeNav: () => void;
}) => {
  const ref = useClickAway(closeNav) as React.RefObject<HTMLElement>;
  return (
    <section
      className={cn(
        "absolute isolate w-full overflow-hidden md:hidden top-0",
        on ? "z-50" : "-z-10"
      )}
    >
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-b from-black/70 to-black/70",
          on ? "block" : "hidden"
        )}
      ></div>
      <aside
        ref={ref}
        className={cn(
          "h-svh w-5/6 bg-secondary py-6 transition-transform duration-200 ease-linear will-change-transform min-[500px]:w-4/6 sm:w-1/2",
          on ? "translate-x-0" : "-translate-x-full transition-none"
        )}
      >
        <div className="flex justify-between px-5">
          <h3 className="text-2xl font-medium text-[#211819]">No.1 Thrift</h3>
          <X
            onClick={closeNav}
            className="cursor-pointer text-[#333333] font-light"
            size={25}
          />
        </div>
        <NavList
          onClick={closeNav}
          className="divide-y-[1px] divide-[#33333399] my-4 border-y-[#33333399] border-[1px]"
          itemClassName="px-5 py-3 font-light"
        />
      </aside>
    </section>
  );
};
