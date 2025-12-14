import { useState, type FC, type SVGProps } from "react";

import { appConfig } from "@/config";

import axios from "axios";
import { toast } from "@pheralb/toast";
import { CloudDownloadIcon, DownloadIcon, LoaderIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/ui/dropdown-menu";
import { buttonVariants } from "@/ui/button";

import { SVG } from "@/ui/icons/svg";
import { React } from "@/ui/icons/react";

import { clipboard } from "@/utils";
import { downloadFile, tsxToSvg } from "@/utils/svgExport";

interface DownloadSVGProps {
  itemName: string;
  iconSize: number;
  ItemIcon: FC<SVGProps<SVGSVGElement>>;
}

const SvgExportOptions = ({
  itemName,
  iconSize,
  ItemIcon,
}: DownloadSVGProps) => {
  const [isLoading, setLoading] = useState<boolean>(false);

  const handleDownloadAsSvg = async () => {
    setLoading(true);
    const jsonUrl = `${appConfig.registryUrl}${itemName}.json`;

    try {
      const response = await axios.get(jsonUrl);
      const json = response.data;

      if (!json.files || !json.files.length) {
        console.error("⚠️ Error fetching source code: ", "No files found.");
      }

      const file = json.files[0];
      let content = file.content as string;
      content = content.replace(/\r\n/g, "\n");
      content = await tsxToSvg(content);
      downloadFile(`${itemName}.svg`, content);
      toast.success({
        text: "Downloaded SVG icon",
        icon: <ItemIcon width={24} height={24} />,
      });
      setLoading(false);
    } catch (error) {
      console.error("⚠️ Error fetching source code: ", error);
      toast.error({
        text: "Failed to download SVG icon",
      });
      setLoading(false);
    }
  };

  const handleCopyAsSvg = async () => {
    setLoading(true);
    const jsonUrl = `${appConfig.registryUrl}${itemName}.json`;

    try {
      const response = await axios.get(jsonUrl);
      const json = response.data;

      if (!json.files || !json.files.length) {
        console.error("⚠️ Error fetching source code: ", "No files found.");
      }

      const file = json.files[0];
      let content = file.content as string;
      content = await tsxToSvg(content);
      await clipboard(content);
      toast.success({
        text: "Copied as SVG icon to clipboard",
        icon: <ItemIcon width={24} height={24} />,
      });
      setLoading(false);
    } catch (error) {
      console.error("⚠️ Error fetching source code: ", error);
      toast.error({
        text: "Failed to copy as SVG icon to clipboard",
      });
      setLoading(false);
    }
  };

  const handleCopyReactComponent = async () => {
    setLoading(true);
    const jsonUrl = `${appConfig.registryUrl}${itemName}.json`;

    try {
      const response = await axios.get(jsonUrl);
      const json = response.data;

      if (!json.files || !json.files.length) {
        console.error("⚠️ Error fetching source code: ", "No files found.");
      }

      const file = json.files[0];
      let content = file.content as string;
      content = content.replace(/\r\n/g, "\n");

      await clipboard(content);
      toast.success({
        text: "Copied SVG icon to clipboard",
        icon: <ItemIcon width={24} height={24} />,
      });
      setLoading(false);
    } catch (error) {
      console.error("⚠️ Error fetching source code: ", error);
      toast.error({
        text: "Failed to copy SVG icon to clipboard",
      });
      setLoading(false);
    }
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        title="Export options"
        disabled={isLoading}
        className={buttonVariants({
          variant: "ghost",
          size: "icon",
        })}
      >
        {isLoading ? (
          <LoaderIcon size={iconSize} className="animate-spin" />
        ) : (
          <DownloadIcon size={iconSize} />
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent sideOffset={3}>
        <DropdownMenuItem onClick={handleCopyReactComponent}>
          <React width={16} height={16} />
          <span>Copy React Component</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleCopyAsSvg}>
          <SVG width={16} height={16} />
          <span>Copy as SVG</span>
        </DropdownMenuItem>
        <DropdownMenuItem onClick={handleDownloadAsSvg}>
          <CloudDownloadIcon size={16} />
          <span>Download as SVG</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SvgExportOptions;
