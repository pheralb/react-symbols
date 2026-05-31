import { Folder, Fluent, Symbols } from "@react-symbols/icons";
import { NavLink, useLocation } from "react-router";
import { SearchIcon } from "lucide-react";

import { cn } from "@/utils";
import { totalFolders, totalFluentIcons, totalIcons } from "@/data/svgs";

import Divider from "@/ui/divider";
import { buttonVariants } from "@/ui/button";
import { containerClasses } from "@/ui/container";

import Search from "@/components/navbar/search";
import IconSize from "@/components/navbar/iconSize";

// Only Files & Folders Icons Routes:
const NavIconsRoutes = [
  {
    title: "Files",
    href: "/",
    icon: Symbols,
    iconSize: 24,
  },
  {
    title: "Folders",
    href: "/folders",
    icon: Folder,
    iconSize: 20,
  },
  {
    title: "Fluent",
    href: "/fluent",
    icon: Fluent,
    iconSize: 18,
  },
];

const Navbar = () => {
  const location = useLocation();
  return (
    <nav className="sticky -top-1 z-40 border-y border-zinc-200 bg-zinc-100/80 py-2.5 backdrop-blur-sm dark:border-zinc-800 dark:bg-zinc-900/80">
      <div
        className={cn(
          containerClasses,
          "flex w-full flex-col items-center space-y-4 space-x-0 md:flex-row md:space-y-0 md:space-x-3",
        )}
      >
        <div className="relative w-full">
          <SearchIcon
            strokeWidth={1.5}
            className="absolute top-1/2 left-1 h-5 w-5 -translate-y-1/2 transform text-zinc-400 md:h-5.5 md:w-5.5"
          />
          <Search
            placeholder={
              location.pathname === "/"
                ? `Search ${totalIcons} file icons...`
                : location.pathname === "/folders"
                  ? `Search ${totalFolders} folder icons...`
                  : location.pathname === "/fluent"
                    ? `Search ${totalFluentIcons} Fluent icons...`
                    : undefined
            }
            className="rounded-none border-t-0 border-r-0 border-b border-l-0 pl-8.5 text-[16px] shadow-none placeholder:text-[16px] focus:border-none focus:ring-0 focus-visible:ring-0 md:border-none md:pl-9.5 dark:focus:border-none dark:focus:ring-0"
          />
        </div>
        <Divider className="hidden md:block" />
        <div className="flex w-full items-center space-x-1 md:w-auto">
          {NavIconsRoutes.map((link) => (
            <NavLink
              key={link.href}
              to={{
                pathname: link.href,
                search: location.search,
              }}
              className={cn(
                buttonVariants({
                  variant: "outline",
                }),
                "w-full border-transparent bg-transparent shadow-none hover:border-zinc-200 md:w-auto dark:border-transparent dark:bg-transparent dark:hover:border-zinc-800",
                "text-zinc-500 hover:text-zinc-800 dark:text-zinc-400 dark:hover:text-zinc-100",
                location.pathname === link.href &&
                  "border-zinc-200 bg-zinc-50 text-zinc-900 hover:border-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:border-zinc-700/50 dark:bg-zinc-800 dark:text-white dark:hover:border-zinc-600 dark:hover:text-white",
              )}
            >
              <link.icon
                width={link.iconSize}
                height={link.iconSize}
                className="text-react-symbol-gray"
              />
              <span>{link.title}</span>
            </NavLink>
          ))}
        </div>
        <Divider className="hidden md:block" />
        <IconSize />
      </div>
    </nav>
  );
};

export default Navbar;
