import {
  type FunctionComponent,
  type ReactNode,
  type SVGProps,
  useState,
} from "react";
import { toast } from "sonner";
import JSConfetti from "js-confetti";
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
import { ChevronDownIcon, CopyIcon } from "@/ui/icons/feather";

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

  const handleCopy = async (text: string, icon: ReactNode) => {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
      confettiColors: ["#2563EB", "#0D9488", "#22D3EE", "#C084FC"],
      confettiRadius: 3,
      confettiNumber: 50,
    });
    await clipboard(text);
    toast.success("Copied to clipboard", {
      description: text,
      icon: icon,
    });
  };

  return (
    <div
      className={cn(
        buttonVariants({
          variant: "outline",
          className: "active:scale-100",
        }),
        "select-all space-x-3 rounded-3xl text-zinc-600 transition-colors hover:bg-transparent dark:text-zinc-400 dark:hover:bg-transparent dark:hover:text-white",
        props.className,
      )}
    >
      <code className="font-mono text-sm">
        {` ${selectedInstallCommand.command} ${globals.npmPackageName}`}
      </code>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger
          className="outline-none focus:outline-none focus-visible:text-white"
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
                handleCopy(fullCommand, <item.icon width={24} height={24} />);
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
