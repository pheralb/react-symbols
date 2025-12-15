import {
  type FunctionComponent,
  type ReactNode,
  type SVGProps,
  useState,
} from "react";
import { toast } from "@pheralb/toast";
import { Bun, NPM, PNPM, Yarn } from "@react-symbols/icons";

import { globals } from "@/globals";
import { clipboard, cn } from "@/utils";

import { buttonVariants } from "@/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";
import { ChevronDownIcon, CopyIcon } from "lucide-react";

interface iInstallCommands {
  package: string;
  command: string;
  icon: FunctionComponent<SVGProps<SVGSVGElement>>;
}

interface iInstallCommandProps {
  className?: string;
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
  {
    package: "bun",
    command: "bun add",
    icon: Bun,
  },
];

const InstallCommand = (props: iInstallCommandProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const [selectedInstallCommand, setSelectedInstallCommand] =
    useState<iInstallCommands>(installCommands[0]);

  const handleCopy = async (
    text: string,
    packageManager: string,
    icon: ReactNode,
  ) => {
    await clipboard(text);
    toast.success({
      text: `Copied ${packageManager} command`,
      icon: icon,
    });
  };

  return (
    <div
      className={cn(
        buttonVariants({
          variant: "outline",
          className: "cursor-default shadow-xs active:scale-100",
        }),
        "space-x-3 rounded-3xl text-zinc-600 select-all hover:bg-transparent dark:text-zinc-400 dark:hover:bg-transparent dark:hover:text-white",
        props.className,
      )}
    >
      <code className="font-mono text-sm">
        {` ${selectedInstallCommand.command} ${globals.npmPackageName}`}
      </code>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger
          className="cursor-pointer outline-none focus:outline-none focus-visible:text-white"
          title="Select package manager"
        >
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
              onSelect={() => {
                setSelectedInstallCommand(item);
                const fullCommand = `${item.command} ${globals.npmPackageName}`;
                handleCopy(
                  fullCommand,
                  item.package,
                  <item.icon width={20} height={20} />,
                );
              }}
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
