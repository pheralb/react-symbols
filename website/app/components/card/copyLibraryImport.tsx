import type { FC, SVGProps } from "react";

import { clipboard } from "@/utils";
import { toast } from "@pheralb/toast";
import { Button } from "@/ui/button";
import { CopyIcon } from "lucide-react";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/ui/tooltip";

type IconType = "symbols" | "folders" | "fluent";

const importPathMap: Record<IconType, string> = {
  symbols: "@react-symbols/icons/files",
  folders: "@react-symbols/icons/folders",
  fluent: "@react-symbols/icons/fluent",
};

interface CopyLibraryImportProps {
  itemName: string;
  iconType: IconType;
  iconSize: number;
  ItemIcon: FC<SVGProps<SVGSVGElement>>;
}

const CopyLibraryImport = ({
  itemName,
  iconType,
  iconSize,
  ItemIcon,
}: CopyLibraryImportProps) => {
  const handleCopyFromLibrary = async () => {
    const capitalizedItemName =
      itemName.charAt(0).toUpperCase() + itemName.slice(1);
    const code = `import { ${capitalizedItemName} } from "${importPathMap[iconType]}";`;

    await clipboard(code);
    toast.success({
      text: "Copied library import",
      icon: <ItemIcon width={24} height={24} />,
    });
  };

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          title="Copy library import"
          variant="ghost"
          size="icon"
          onClick={handleCopyFromLibrary}
        >
          <CopyIcon size={iconSize} />
        </Button>
      </TooltipTrigger>
      <TooltipContent side="bottom" sideOffset={4}>
        <p>Copy library import</p>
      </TooltipContent>
    </Tooltip>
  );
};

export default CopyLibraryImport;
