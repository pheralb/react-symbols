import { Folder, FolderOpen } from "@react-symbols/icons";
import { NavLink, useLocation } from "react-router";
import { SearchIcon } from "lucide-react";

import { totalFolders, totalIcons, totalLibraryIcons } from "@/data/svgs";
import { cn } from "@/utils";

import { containerClasses } from "@/ui/container";
import { buttonVariants } from "@/ui/button";
import Divider from "@/ui/divider";

import Search from "@/components/navbar/search";
import IconSize from "@/components/navbar/iconSize";

// Only Files & Folders Icons Routes:
const NavIconsRoutes = [
  {
    title: "Files",
    href: "/",
  },
  {
    title: "Folders",
    href: "/folders",
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
                  : `Search ${totalLibraryIcons} icons...`
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
                  className: "shadow-none",
                }),
                "w-full md:w-auto",
                location.pathname === link.href
                  ? "border-zinc-200 text-black dark:border-zinc-800 dark:text-white"
                  : "border-none bg-transparent text-zinc-600 hover:text-black dark:bg-transparent dark:text-zinc-400 dark:hover:text-white",
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
        <div className="flex w-full flex-col space-y-1 pb-1 text-zinc-600 hover:text-black md:w-56 md:pb-0 dark:text-zinc-400 dark:hover:text-white">
          <p className="text-xs font-medium uppercase select-none">Size</p>
          <IconSize />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
