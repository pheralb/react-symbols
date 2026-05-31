import type { iIcons } from "@/data/svgs";

import { cn, titleToPascal } from "@/utils";

import CopyShadcnCommand from "@/components/card/copyShadcnCommand";
import CopyLibraryImport from "@/components/card/copyLibraryImport";
import SvgExportOptions from "@/components/card/svgExportOptions";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/tooltip";

interface iCard extends iIcons {
  iconType: "symbols" | "folders" | "fluent";
  iconSize: number;
  iconStrokeWidth?: number;
}

const Card = (props: iCard) => {
  const cardItemSize = 16;
  const itemName = titleToPascal(props.name);
  return (
    <div
      className={cn(
        "px-4 pt-4 pb-2",
        "relative overflow-hidden",
        "group flex flex-col items-center justify-center space-y-2.5 rounded-md",
        "border border-zinc-200 dark:border-zinc-800",
        "transition-shadow hover:shadow-sm",
      )}
    >
      <props.icon
        width={props.iconSize}
        height={props.iconSize}
        strokeWidth={props.iconStrokeWidth}
      />
      <Tooltip delayDuration={200}>
        <TooltipTrigger asChild>
          <p className="max-w-36 truncate text-sm text-zinc-950 dark:text-zinc-50">
            {props.name}
          </p>
        </TooltipTrigger>
        <TooltipContent side="bottom" sideOffset={4}>
          <p className="text-sm text-zinc-950 dark:text-zinc-50">
            &lt;{props.name} /&gt;
          </p>
        </TooltipContent>
      </Tooltip>

      <div className="flex items-center space-x-1">
        <CopyShadcnCommand
          iconSize={cardItemSize}
          itemName={itemName}
          ItemIcon={props.icon}
        />
        <CopyLibraryImport
          iconType={props.iconType}
          iconSize={cardItemSize}
          itemName={itemName}
          ItemIcon={props.icon}
        />
        <SvgExportOptions
          iconSize={cardItemSize}
          itemName={itemName}
          ItemIcon={props.icon}
        />
      </div>
    </div>
  );
};

export default Card;
