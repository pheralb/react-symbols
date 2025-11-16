import type { iIcons } from "@/data/svgs";

import { cn } from "@/utils";

import CopySource from "@/components/card/copySource";
import CopyShadcnCommand from "@/components/card/copyShadcnCommand";
import CopyLibraryImport from "@/components/card/copyLibraryImport";
import OpenWithV0 from "@/components/card/openWithv0";

interface iCard extends iIcons {
  isFolder: boolean;
  iconSize: number;
}

const Card = (props: iCard) => {
  const cardItemSize = 16;
  return (
    <div
      className={cn(
        "px-4 pt-4 pb-2",
        "relative overflow-hidden",
        "group flex flex-col items-center justify-center space-y-2.5 rounded-md",
        "border border-zinc-200 dark:border-zinc-800",
      )}
    >
      <props.icon width={props.iconSize} height={props.iconSize} />
      <p className="text-sm tracking-tight text-black dark:text-white">
        {props.name}
      </p>
      <div
        className={cn(
          "absolute top-0 right-0",
          "rounded-bl-md border-b border-l border-zinc-200 dark:border-zinc-800",
        )}
      >
        <CopySource
          iconSize={14}
          itemName={props.name}
          isFolder={props.isFolder}
          ItemIcon={props.icon}
        />
      </div>
      <div className="flex items-center space-x-1">
        <CopyLibraryImport
          iconSize={cardItemSize}
          itemName={props.name}
          ItemIcon={props.icon}
        />
        <CopyShadcnCommand
          iconSize={cardItemSize}
          itemName={props.name}
          isFolder={props.isFolder}
          ItemIcon={props.icon}
        />
        <OpenWithV0
          itemName={props.name.charAt(0).toLowerCase() + props.name.slice(1)}
          isFolder={props.isFolder}
        />
      </div>
    </div>
  );
};

export default Card;
