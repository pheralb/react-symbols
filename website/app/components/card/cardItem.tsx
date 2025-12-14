import type { iIcons } from "@/data/svgs";

import { cn, titleToPascal } from "@/utils";

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
  const itemName = titleToPascal(props.name);
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
        <CopySource iconSize={14} itemName={itemName} ItemIcon={props.icon} />
      </div>
      <div className="flex items-center space-x-1">
        <CopyLibraryImport
          isFolder={props.isFolder}
          iconSize={cardItemSize}
          itemName={itemName}
          ItemIcon={props.icon}
        />
        <CopyShadcnCommand
          iconSize={cardItemSize}
          itemName={itemName}
          ItemIcon={props.icon}
        />
        <OpenWithV0 itemName={itemName} />
      </div>
    </div>
  );
};

export default Card;
