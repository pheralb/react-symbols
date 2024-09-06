import { NPM, Symbols } from "@react-symbols/icons";
import { ArrowSquareOut } from "@phosphor-icons/react";
import { cn } from "@/utils";

import { buttonVariants } from "@/ui/button";
import { containerClasses } from "@/ui/container";

import ExternalLink from "@/components/externalLink";
import InstallCommand from "@/components/installCommand";
import { Figma, VSCode, Github } from "@/components/icons";

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
        <Symbols height={48} />
        <div className="flex flex-col space-y-0">
          <h2 className="text-2xl font-semibold tracking-tight">
            React-Symbols
          </h2>
          <p className="text-zinc-400">Beautifully File & Folder Icons</p>
        </div>
      </div>
      <div className="flex items-center space-x-4">
        <InstallCommand />
        <div className="h-7 w-[1.8px] bg-zinc-800" />
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
          <ExternalLink
            href="https://github.com/pheralb/react-symbols"
            className={linkClasses}
          >
            <Github width={svgLogoSize.width} height={svgLogoSize.height} />
            <span>GitHub</span>
            <ArrowSquareOut height={12} size={15} weight="bold" />
          </ExternalLink>
        </nav>
      </div>
    </section>
  );
};

export default Header;
