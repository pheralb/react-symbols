import { useState, type FC, type SVGProps } from "react";

import axios from "axios";
import { toast } from "@pheralb/toast";
import { Symbols } from "@react-symbols/icons";
import { CodeIcon, CopyIcon, LoaderIcon, XIcon } from "lucide-react";

import { Shadcnui } from "@/ui/icons/svgl";
import { Button, buttonVariants } from "@/ui/button";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/popover";

import { clipboard } from "@/utils";
import { appConfig } from "@/config";

interface CopyIconProps {
  itemName: string;
  ItemIcon: FC<SVGProps<SVGSVGElement>>;
  isFolder?: boolean;
}

const CopyIconActions = ({ itemName, isFolder, ItemIcon }: CopyIconProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  // Copy using library import:
  const handleCopyFromLibrary = async () => {
    const code = `<${itemName} />`;
    await clipboard(code);
    toast.success({
      text: "Copied library import",
      icon: <ItemIcon width={24} height={24} />,
    });
    setIsOpen(false);
  };

  // Copy shadcn/ui command:
  const handleCopyShadcnCommand = async () => {
    const itemNameLower = itemName.charAt(0).toLowerCase() + itemName.slice(1);
    const makeCommand = !isFolder
      ? `${appConfig.shadcnCommand} ${appConfig.registryUrl}${itemNameLower}.json`
      : `${appConfig.shadcnCommand} ${appConfig.registryUrl}folders/${itemNameLower}.json`;

    await clipboard(makeCommand);
    toast.success({
      text: "Copied shadcn/ui command",
      icon: <ItemIcon width={24} height={24} />,
    });
    setIsOpen(false);
  };

  // Copy source code:
  const handleCopySource = async () => {
    setLoading(true);
    const itemNameLower = itemName.charAt(0).toLowerCase() + itemName.slice(1);
    const jsonUrl = !isFolder
      ? `${appConfig.registryUrl}${itemNameLower}.json`
      : `${appConfig.registryUrl}folders/${itemNameLower}.json`;

    try {
      const response = await axios.get(jsonUrl);
      const json = response.data;

      if (!json.files || !json.files.length) {
        console.error(
          "⚠️ Error fetching or copying source code: ",
          "No files found.",
        );
      }

      const file = json.files[0];
      let content = file.content as string;
      content = content.replace(/\r\n/g, "\n");

      await clipboard(content);
      toast.success({
        text: "Copied source code",
        icon: <ItemIcon width={24} height={24} />,
      });
      setLoading(false);
      setIsOpen(false);
    } catch (error) {
      console.error("⚠️ Error fetching or copying source code: ", error);
      toast.error({
        text: "Failed to copy source code. Please try again.",
      });
      setLoading(false);
    }
  };

  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger
        title="Copy to clipboard"
        className={buttonVariants({
          variant: "ghost",
          size: "icon",
        })}
      >
        {!isOpen ? (
          <CopyIcon size={16} strokeWidth={2} />
        ) : (
          <XIcon size={16} strokeWidth={2} />
        )}
      </PopoverTrigger>
      <PopoverContent sideOffset={1} className="flex flex-col space-y-1.5">
        <Button
          variant="outline"
          onClick={handleCopyFromLibrary}
          className="justify-start shadow-none"
          title="Copy with library import"
        >
          <Symbols width={16} height={16} />
          <span>Copy with library import</span>
        </Button>
        <Button
          variant="outline"
          onClick={handleCopyShadcnCommand}
          className="justify-start shadow-none"
          title="Copy shadcn/ui command"
        >
          <Shadcnui width={16} height={16} />
          <span>Copy shadcn/ui command</span>
        </Button>
        <Button
          variant="outline"
          onClick={handleCopySource}
          className="justify-start shadow-none"
          title="Copy source code"
          disabled={loading}
        >
          {loading ? (
            <LoaderIcon className="animate-spin" width={16} height={16} />
          ) : (
            <CodeIcon width={16} height={16} />
          )}
          <span>{loading ? "Copying..." : "Copy source code"}</span>
        </Button>
      </PopoverContent>
    </Popover>
  );
};

export default CopyIconActions;
