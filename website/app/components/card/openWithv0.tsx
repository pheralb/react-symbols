import { appConfig } from "@/config";

import ExternalLink from "@/components/externalLink";
import { buttonVariants } from "@/ui/button";
import { V0Icon } from "@/ui/icons/svgl";

interface OpenWithV0Props {
  itemName: string;
}

const OpenWithV0 = ({ itemName }: OpenWithV0Props) => {
  return (
    <ExternalLink
      title="Open with v0"
      href={`${appConfig.v0URL}${appConfig.registryUrl}${itemName}.json`}
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
