import type { iIcons } from "@/data/svgs";

import OpenWithV0 from "@/components/card/openWithv0";
import CopyIconActions from "@/components/card/copyIcon";

interface iCard extends iIcons {
  isFolder: boolean;
  iconSize: number;
}

const Card = (props: iCard) => {
  return (
    <div className="group flex flex-col items-center justify-center rounded-lg border border-zinc-200 px-4 pt-4 pb-2 dark:border-zinc-800">
      <props.icon width={props.iconSize} height={props.iconSize} />
      <p className="mt-2 mb-1.5 text-sm tracking-tight text-black dark:text-white">
        {props.name}
      </p>
      <div className="flex items-center space-x-1">
        <CopyIconActions
          itemName={props.name}
          ItemIcon={props.icon}
          isFolder={props.isFolder}
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
