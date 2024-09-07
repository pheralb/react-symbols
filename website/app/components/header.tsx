import { Github, NPM, Symbols } from "@react-symbols/icons";
import { ArrowSquareOut } from "@phosphor-icons/react";
import { cn } from "@/utils";

import { buttonVariants } from "@/ui/button";
import { containerClasses } from "@/ui/container";

import ExternalLink from "@/components/externalLink";
import InstallCommand from "@/components/installCommand";
import { Figma, VSCode } from "@/components/icons";
import { Link } from "@remix-run/react";
import Divider from "@/ui/divider";

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
  className: "rounded-3xl w-auto",
});

interface iHeaderProps {
  npmVersion: string;
}

const Header = (props: iHeaderProps) => {
  return (
    <section
      className={cn("py-10", "flex flex-col space-y-6", containerClasses)}
    >
      <div className="flex items-center gap-4">
        <Symbols height={50} className="hover:animate-pulse" />
        <div className="flex flex-col space-y-[2px]">
          <Link
            to="/"
            className="text-2xl font-semibold tracking-tight transition-opacity hover:opacity-75"
          >
            React-Symbols
          </Link>
          <p className="flex items-center gap-2 text-zinc-400">
            Beautifully File & Folder Icons. Crafted by{" "}
            <ExternalLink
              href="/"
              className="group flex items-center space-x-2 underline decoration-zinc-500 decoration-wavy underline-offset-[4px] transition-colors hover:text-white hover:decoration-white"
            >
              <img
                className="h-6 w-6 rounded-full transition-all group-hover:ring-2 group-hover:ring-zinc-500"
                src="https://avatars.githubusercontent.com/u/35271042?v=4"
                alt="Miguel Solorio"
              />
              <span>Miguel Solorio</span>
            </ExternalLink>{" "}
            and website created by{" "}
            <ExternalLink
              href="https://pheralb.dev"
              className="group flex items-center space-x-2 underline decoration-zinc-500 decoration-wavy underline-offset-[4px] transition-colors hover:text-white hover:decoration-white"
            >
              <img
                className="h-6 w-6 rounded-full transition-all group-hover:ring-2 group-hover:ring-zinc-500"
                src="https://avatars.githubusercontent.com/u/62877300?v=4"
                alt="Pablo Hernández"
              />
              <span>Pablo Hernández</span>
            </ExternalLink>
            .
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <InstallCommand />
        <Divider />
        <nav className="flex items-center space-x-2">
          <ExternalLink
            href="https://www.npmjs.com/package/@react-symbols/icons"
            className={linkClasses}
          >
            <NPM width={svgIconSize.width} height={svgIconSize.height} />
            <span>v{props.npmVersion}</span>
            <ArrowSquareOut height={12} size={15} weight="bold" />
          </ExternalLink>
          <ExternalLink
            href="https://github.com/pheralb/react-symbols"
            className={linkClasses}
          >
            <Github width={svgIconSize.width} height={svgIconSize.height} />
            <span>Docs</span>
            <ArrowSquareOut height={12} size={15} weight="bold" />
          </ExternalLink>
          <ExternalLink
            href="https://www.figma.com/file/HYLMyRbIdSbIJQlqnd9pSN/Symbols---File-Icons?type=design&node-id=20537-804&t=F5YRpTBiNwKqtOsT-0"
            className={linkClasses}
          >
            <Figma width={svgLogoSize.width} height={svgLogoSize.height} />
            <span>Figma</span>
            <ArrowSquareOut height={12} size={15} weight="bold" />
          </ExternalLink>
          <ExternalLink
            href="https://marketplace.visualstudio.com/items?itemName=miguelsolorio.symbols"
            className={linkClasses}
          >
            <VSCode width={svgLogoSize.width} height={svgLogoSize.height} />
            <span>VS Code</span>
            <ArrowSquareOut height={12} size={15} weight="bold" />
          </ExternalLink>
        </nav>
      </div>
    </section>
  );
};

export default Header;
