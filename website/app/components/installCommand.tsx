import { type FunctionComponent, type SVGProps, useState } from "react";

import { globals } from "@/globals";

import { buttonVariants } from "@/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";
import { ChevronDownIcon, CopyIcon } from "@/ui/icons/feather";

import { NPM, PNPM, Yarn } from "@react-symbols/icons";
import { cn } from "@/utils";

interface iInstallCommands {
  package: string;
  command: string;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
}

const installCommands: iInstallCommands[] = [
  {
    package: "npm",
    command: "npm i",
    icon: NPM,
  },
  {
    package: "yarn",
    command: "yarn add",
    icon: Yarn,
  },
  {
    package: "pnpm",
    command: "pnpm add",
    icon: PNPM,
  },
];

const InstallCommand = () => {
  const [selectedPackage, setSelectedPackage] = useState<iInstallCommands>(
    installCommands[0],
  );
  const [open, setOpen] = useState<boolean>(false);
  const fullCommand = `${selectedPackage.command} ${globals.npmPackageName}`;
  return (
    <div
      className={cn(
        buttonVariants({
          variant: "outline",
        }),
        "select-all space-x-3 rounded-3xl text-zinc-400 transition-colors hover:bg-transparent hover:text-white dark:hover:bg-transparent",
      )}
    >
      <code className="font-mono text-sm">{fullCommand}</code>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger className="outline-none focus:outline-none focus-visible:text-white">
          {open ? (
            <ChevronDownIcon width={14} height={14} strokeWidth={2} />
          ) : (
            <CopyIcon width={14} height={14} strokeWidth={2} />
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent sideOffset={6} align="end">
          {installCommands.map((item) => (
            <DropdownMenuItem
              key={item.package}
              onSelect={() => setSelectedPackage(item)}
            >
              <item.icon width={16} height={16} />
              <span>{item.package}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default InstallCommand;
