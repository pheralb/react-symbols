import { useState, type FC, type SVGProps } from "react";

import axios from "axios";
import { appConfig } from "@/config";
import { clipboard, cn } from "@/utils";
import { toast } from "@pheralb/toast";
import { CodeIcon, LoaderIcon } from "lucide-react";

interface CopySourceProps {
  itemName: string;
  iconSize: number;
  isFolder?: boolean;
  ItemIcon: FC<SVGProps<SVGSVGElement>>;
}

const CopySource = ({
  itemName,
  iconSize,
  isFolder,
  ItemIcon,
}: CopySourceProps) => {
  const [isLoading, setLoading] = useState<boolean>(false);

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
    } catch (error) {
      console.error("⚠️ Error fetching or copying source code: ", error);
      toast.error({
        text: "Failed to copy source code. Please try again.",
      });
      setLoading(false);
    }
  };

  return (
    <button
      title="Copy source code"
      onClick={handleCopySource}
      disabled={isLoading}
      className={cn(
        "cursor-pointer transition-colors",
        isLoading && "cursor-default",
        "p-1.5 text-zinc-500 dark:text-zinc-500",
        "hover:text-zinc-950 dark:hover:text-zinc-50",
      )}
    >
      {isLoading ? (
        <LoaderIcon size={iconSize} className="animate-spin" />
      ) : (
        <CodeIcon size={iconSize} />
      )}
    </button>
  );
};

export default CopySource;
