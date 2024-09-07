import type { iIcons } from "@/data/svgs";
import { lower } from "@/utils";

import { Button, buttonVariants } from "@/ui/button";
import { ArrowSquareOut, Code, Copy } from "@phosphor-icons/react";
import ExternalLink from "./externalLink";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip";
import { Github, Reactjs } from "@react-symbols/icons";

interface iCard extends iIcons {
  isFolder: boolean;
  iconSize: number;
}

const Card = (props: iCard) => {
  return (
    <div className="group flex flex-col items-center justify-center space-y-1 rounded-lg border border-zinc-800 px-4 pb-2 pt-4 transition-colors hover:bg-zinc-800/50">
      <props.icon width={props.iconSize} height={props.iconSize} />
      <p className="text-sm tracking-tight text-white">{props.name}</p>
      <div className="flex items-center space-x-1">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon">
                <Copy size={17} />
              </Button>
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              className="flex items-center space-x-2"
            >
              <Reactjs width={20} height={20} />
              <p>Copy React Component</p>
            </TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger>
              <ExternalLink
                href={
                  props.isFolder
                    ? `https://github.com/pheralb/react-symbols/blob/main/library/src/library/folders/${lower(
                        props.name,
                      )}.tsx`
                    : `https://github.com/pheralb/react-symbols/blob/main/library/src/library/${lower(
                        props.name,
                      )}.tsx`
                }
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                })}
              >
                <Code size={17} />
              </ExternalLink>
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              className="flex items-center space-x-2"
            >
              <Github width={20} height={20} className="fill-current" />
              <p>Check Source Code</p>
              <ArrowSquareOut size={12} />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default Card;
