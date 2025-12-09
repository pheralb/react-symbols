import type { FC, SVGProps } from "react";

import { clipboard } from "@/utils";
import { toast } from "@pheralb/toast";
import { appConfig } from "@/config";
import { Button } from "@/ui/button";
import { Shadcnui } from "@/ui/icons/svgl";

interface CopyShadcnCommandProps {
  itemName: string;
  iconSize: number;
  ItemIcon: FC<SVGProps<SVGSVGElement>>;
}

const CopyShadcnCommand = ({
  itemName,
  iconSize,
  ItemIcon,
}: CopyShadcnCommandProps) => {
  const handleCopyShadcnCommand = async () => {
    const makeCommand = `${appConfig.shadcnCommand} ${appConfig.registryUrl}${itemName}.json`;

    await clipboard(makeCommand);
    toast.success({
      text: "Copied shadcn/ui command",
      icon: <ItemIcon width={24} height={24} />,
    });
  };
  return (
    <Button
      title="Copy shadcn/ui command"
      variant="ghost"
      size="icon"
      onClick={handleCopyShadcnCommand}
    >
      <Shadcnui width={iconSize} height={iconSize} />
    </Button>
  );
};

export default CopyShadcnCommand;
