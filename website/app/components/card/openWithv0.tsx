import { appConfig } from "@/config";

import ExternalLink from "@/components/externalLink";
import { buttonVariants } from "@/ui/button";
import { V0Icon } from "@/ui/icons/svgl";

interface OpenWithV0Props {
  itemName: string;
  isFolder?: boolean;
}

const OpenWithV0 = ({ itemName, isFolder }: OpenWithV0Props) => {
  return (
    <ExternalLink
      title="Open with V0"
      href={new URL(
        isFolder ? `folders/${itemName}.json` : `${itemName}.json`,
        appConfig.registryUrl,
      ).toString()}
      className={buttonVariants({
        variant: "ghost",
        size: "icon",
      })}
    >
      <V0Icon width={22} height={22} />
    </ExternalLink>
  );
};

export default OpenWithV0;
