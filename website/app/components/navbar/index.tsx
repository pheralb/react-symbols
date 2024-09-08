import { Folder, FolderOpen } from "@react-symbols/icons";
import { NavLink, useLocation } from "@remix-run/react";

import Search from "@/components/navbar/search";
import { cn } from "@/utils";

import { SearchIcon } from "@/ui/icons/feather";
import { containerClasses } from "@/ui/container";
import { buttonVariants } from "@/ui/button";
import Divider from "@/ui/divider";
import { Slider } from "@/ui/slider";

const NavLinks = [
  {
    title: "Icons",
    href: "/",
  },
  {
    title: "Folders",
    href: "/folders",
  },
];

interface iNavbarProps {
  searchPlaceholder?: string;
  iconSize: number;
  onChangeIconSize: (size: number) => void;
}

const Navbar = (props: iNavbarProps) => {
  const location = useLocation();
  return (
    <nav className="sticky -top-1 z-50 border-y border-zinc-800 bg-zinc-900/80 py-[10px] backdrop-blur-sm">
      <div
        className={cn(
          containerClasses,
          "flex w-full flex-col items-center space-x-0 space-y-4 md:flex-row md:space-x-3 md:space-y-0",
        )}
      >
        <div className="relative w-full">
          <SearchIcon
            strokeWidth={1.5}
            className="absolute left-1 top-1/2 h-5 w-5 -translate-y-[47%] transform text-zinc-400 md:h-[22px] md:w-[22px]"
          />
          <Search
            placeholder={props.searchPlaceholder}
            className="rounded-none border-b border-l-0 border-r-0 border-t-0 pl-[34px] text-[16px] placeholder:text-[16px] focus:ring-0 md:border-none md:pl-[38px]"
          />
        </div>
        <Divider className="hidden md:block" />
        <div className="flex w-full items-center space-x-1 md:w-auto">
          {NavLinks.map((link) => (
            <NavLink
              to={link.href}
              key={link.href}
              unstable_viewTransition={true}
              className={cn(
                buttonVariants({
                  variant:
                    location.pathname === link.href ? "outline" : "ghost",
                  className:
                    location.pathname === link.href
                      ? "text-white"
                      : "text-zinc-400 hover:text-white",
                }),
                "w-full md:w-auto",
              )}
            >
              {location.pathname === link.href ? (
                <FolderOpen width={20} height={20} />
              ) : (
                <Folder width={20} height={20} />
              )}
              <span>{link.title}</span>
            </NavLink>
          ))}
        </div>
        <Divider className="hidden md:block" />
        <div className="flex w-full flex-col space-y-1 pb-1 text-zinc-400 transition-colors hover:text-white md:w-56 md:pb-0">
          <p className="text-xs font-medium uppercase">Size</p>
          <Slider
            defaultValue={[props.iconSize]}
            onValueChange={(value) => props.onChangeIconSize(value[0])}
            max={70}
            min={20}
            step={1}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
