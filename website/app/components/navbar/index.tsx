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
    <nav className="sticky top-0 border-y border-zinc-800 bg-zinc-900/80 py-2 backdrop-blur-sm">
      <div
        className={cn(containerClasses, "flex w-full items-center space-x-3")}
      >
        <div className="relative w-full">
          <SearchIcon
            width={20}
            height={20}
            strokeWidth={1.5}
            className="absolute left-1 top-1/2 -translate-y-[47%] transform text-zinc-400"
          />
          <Search
            placeholder={props.searchPlaceholder}
            className="rounded-none border-none pl-[37px] text-[17px] focus:ring-0"
          />
        </div>
        <Divider />
        <div className="flex items-center space-x-1">
          {NavLinks.map((link) => (
            <NavLink
              to={link.href}
              key={link.href}
              className={buttonVariants({
                variant: location.pathname === link.href ? "outline" : "ghost",
                className:
                  location.pathname === link.href
                    ? "text-white"
                    : "text-zinc-400 hover:text-white",
              })}
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
        <Divider />
        <div className="flex w-56 flex-col space-y-1 text-zinc-400 transition-colors hover:text-white">
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
