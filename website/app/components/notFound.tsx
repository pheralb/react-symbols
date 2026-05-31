import type { ComponentType } from "react";

import { buttonVariants } from "@/ui/button";
import { containerClasses } from "@/ui/container";
import { BoxIcon, SearchXIcon, FolderSearchIcon } from "lucide-react";
import { cn } from "@/utils";
import { Link } from "react-router";

type IconType = "symbols" | "folders" | "fluent";

interface IconTypeConfig {
  label: string;
  pathname: string;
  Icon: ComponentType<{ size?: number; strokeWidth?: number }>;
}

const iconTypeConfig: Record<IconType, IconTypeConfig> = {
  symbols: { label: "Files icons", pathname: "/", Icon: SearchXIcon },
  folders: {
    label: "Folders icons",
    pathname: "/folders",
    Icon: FolderSearchIcon,
  },
  fluent: {
    label: "Fluent icons",
    pathname: "/fluent",
    Icon: FolderSearchIcon,
  },
};

interface NotFoundProps {
  input: string;
  iconType?: IconType;
}

const NotFound = ({ input, iconType = "symbols" }: NotFoundProps) => {
  const current = iconTypeConfig[iconType];
  const alternatives = (
    Object.entries(iconTypeConfig) as [IconType, IconTypeConfig][]
  ).filter(([key]) => key !== iconType);

  return (
    <div
      className={cn(
        containerClasses,
        "my-10 flex flex-col items-center justify-center",
      )}
    >
      <BoxIcon className="mb-3 h-10 w-10 text-zinc-500" />
      <h1 className="text-xl font-bold">Not Found</h1>
      <p className="mt-2 text-gray-500">
        No results for &quot;{input}&quot; in {current.label}
      </p>
      <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
        <Link
          to={{ pathname: current.pathname, search: "" }}
          className={buttonVariants({ variant: "default" })}
        >
          <current.Icon size={18} strokeWidth={1.5} />
          <span>Clear</span>
        </Link>
        {alternatives.map(([, config]) => (
          <Link
            key={config.pathname}
            to={{ pathname: config.pathname, search: `?q=${input}` }}
            className={buttonVariants({ variant: "outline" })}
          >
            <config.Icon size={18} strokeWidth={1.5} />
            <span>{config.label}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NotFound;
