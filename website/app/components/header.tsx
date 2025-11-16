import { Link } from "react-router";

import { Github, NPM, Symbols } from "@react-symbols/icons";

import { cn } from "@/utils";

import { buttonVariants } from "@/ui/button";
import { containerClasses } from "@/ui/container";
import Divider from "@/ui/divider";

import { Figma, VSCode } from "@/ui/icons/svgl";

import ExternalLink from "@/components/externalLink";
import InstallCommand from "@/components/installCommand";
import { ArrowUpRightIcon } from "lucide-react";

const svgLogoSize = {
  width: 14,
  height: 14,
};

const svgIconSize = {
  width: 16,
  height: 16,
};

const linkClasses = buttonVariants({
  variant: "outline",
  className: "rounded-3xl w-auto group",
});

const arrowClasses = cn(
  "text-zinc-400 transition-transform group-hover:translate-x-[0.1rem] group-hover:text-black dark:group-hover:text-white",
);

interface iHeaderProps {
  npmVersion: string;
}

const Header = (props: iHeaderProps) => {
  return (
    <section
      className={cn(
        "pt-8 pb-4 md:py-10",
        "flex flex-col space-y-5",
        containerClasses,
      )}
    >
      <div className="flex items-center gap-4">
        <Symbols height={50} className="hover:animate-pulse" />
        <div className="flex flex-col space-y-0.5">
          <Link
            to="/"
            className="w-auto text-xl font-semibold tracking-tight transition-opacity hover:opacity-75 md:text-2xl"
          >
            React-Symbols
          </Link>
          <div className="flex flex-col items-start space-y-2 space-x-0 text-sm text-zinc-600 md:flex-row md:space-y-0 md:space-x-2 md:text-[16px] dark:text-zinc-400">
            <span>
              Beautifully File & Folder Icons for your React projects.
            </span>
          </div>
        </div>
      </div>
      <div className="mb-1 flex w-full flex-col items-center space-y-4 space-x-0 md:w-auto md:flex-row md:space-y-0 md:space-x-4">
        <InstallCommand className="w-full md:w-auto" />
        <Divider className="hidden md:block" />
        <nav className="container flex items-center space-x-2 overflow-y-auto pb-1 md:w-auto">
          <ExternalLink
            title="NPM Package"
            href="https://www.npmjs.com/package/@react-symbols/icons"
            className={linkClasses}
          >
            <NPM width={svgIconSize.width} height={svgIconSize.height} />
            <span>v{props.npmVersion}</span>
            <ArrowUpRightIcon
              height={13}
              width={13}
              strokeWidth={2}
              className={arrowClasses}
            />
          </ExternalLink>
          <ExternalLink
            title="Docs"
            href="https://github.com/pheralb/react-symbols"
            className={linkClasses}
          >
            <Github width={svgIconSize.width} height={svgIconSize.height} />
            <span>Docs</span>
            <ArrowUpRightIcon
              height={13}
              width={13}
              strokeWidth={2}
              className={arrowClasses}
            />
          </ExternalLink>
          <ExternalLink
            title="Figma File"
            href="https://www.figma.com/file/HYLMyRbIdSbIJQlqnd9pSN/Symbols---File-Icons?type=design&node-id=20537-804&t=F5YRpTBiNwKqtOsT-0"
            className={linkClasses}
          >
            <Figma width={svgLogoSize.width} height={svgLogoSize.height} />
            <span>Figma</span>
            <ArrowUpRightIcon
              height={13}
              width={13}
              strokeWidth={2}
              className={arrowClasses}
            />
          </ExternalLink>
          <ExternalLink
            title="VS Code Theme"
            href="https://marketplace.visualstudio.com/items?itemName=miguelsolorio.symbols"
            className={linkClasses}
          >
            <VSCode width={svgLogoSize.width} height={svgLogoSize.height} />
            <span>VS Code</span>
            <ArrowUpRightIcon
              height={13}
              width={13}
              strokeWidth={2}
              className={arrowClasses}
            />
          </ExternalLink>
        </nav>
      </div>
    </section>
  );
};

export default Header;
