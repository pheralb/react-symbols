import type { iIcons } from "@/data/svgs";
import { clipboard } from "@/utils";

import { toast } from "sonner";

import { Button } from "@/ui/button";
import { CopyIcon } from "@/ui/icons/feather";

import GetCode from "./getCode";

interface iCard extends iIcons {
  isFolder: boolean;
  iconSize: number;
}

const Card = (props: iCard) => {
  const handleCopy = async () => {
    const code = `<${props.name} />`;
    await clipboard(code);
    toast.success("Copied to clipboard", {
      description: code,
      icon: <props.icon width={24} height={24} />,
    });
  };

  return (
    <div className="group flex flex-col items-center justify-center space-y-1 rounded-lg border border-zinc-800 px-4 pb-2 pt-4 transition-colors hover:bg-zinc-800/50">
      <props.icon width={props.iconSize} height={props.iconSize} />
      <p className="text-sm tracking-tight text-white">{props.name}</p>
      <div className="flex items-center space-x-1">
        <Button
          variant="ghost"
          size="icon"
          onClick={handleCopy}
          title="Copy to clipboard"
        >
          <CopyIcon width={17} height={17} strokeWidth={1.5} />
        </Button>
        <GetCode
          reactComponent={props.icon}
          componentName={props.name}
          isFolder={props.isFolder}
        />
      </div>
    </div>
  );
};

export default Card;
