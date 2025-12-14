import type { FC, SVGProps } from "react";

import { clipboard } from "@/utils";
import { toast } from "@pheralb/toast";
import { Button } from "@/ui/button";
import { CopyIcon } from "lucide-react";

interface CopyLibraryImportProps {
  itemName: string;
  iconSize: number;
  ItemIcon: FC<SVGProps<SVGSVGElement>>;
}

const CopyLibraryImport = ({
  itemName,
  iconSize,
  ItemIcon,
}: CopyLibraryImportProps) => {
  const handleCopyFromLibrary = async () => {
    itemName = itemName.charAt(0).toUpperCase() + itemName.slice(1);
    const code = `import { ${itemName} } from "@react-symbols/icons";`;
    await clipboard(code);
    toast.success({
      text: "Copied library import",
      icon: <ItemIcon width={24} height={24} />,
    });
  };

  return (
    <Button
      title="Copy library import"
      variant="ghost"
      size="icon"
      onClick={handleCopyFromLibrary}
    >
      <CopyIcon size={iconSize} />
    </Button>
  );
};

export default CopyLibraryImport;
