import type { iIcons } from "@/data/svgs";
import { lower } from "@/utils";

import { Button, buttonVariants } from "@/ui/button";
import { ArrowUpRightIcon, CodeIcon, CopyIcon } from "@/ui/icons/feather";
import ExternalLink from "./externalLink";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/ui/tooltip";
import { Github, Reactjs } from "@react-symbols/icons";
import { globals } from "@/globals";

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
                <CopyIcon width={17} height={17} strokeWidth={1.5} />
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
                    ? `${globals.githubSrcRepository}library/folders/${lower(
                        props.name,
                      )}.tsx`
                    : `${globals.githubSrcRepository}library/${lower(
                        props.name,
                      )}.tsx`
                }
                className={buttonVariants({
                  variant: "ghost",
                  size: "icon",
                })}
              >
                <CodeIcon width={17} height={17} strokeWidth={1.5} />
              </ExternalLink>
            </TooltipTrigger>
            <TooltipContent
              side="bottom"
              className="flex items-center space-x-2"
            >
              <Github width={20} height={20} className="fill-current" />
              <p>Check Source Code</p>
              <ArrowUpRightIcon width={12} height={12} strokeWidth={1.5} />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>
    </div>
  );
};

export default Card;
