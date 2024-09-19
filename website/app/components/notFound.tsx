import { buttonVariants } from "@/ui/button";
import { containerClasses } from "@/ui/container";
import { BoxIcon } from "@/ui/icons/feather";
import { cn } from "@/utils";
import { Link } from "@remix-run/react";

interface NotFoundProps {
  input: string;
  onClearResults?: () => void;
  isFolder?: boolean;
}

const NotFound = (props: NotFoundProps) => {
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
        No results for &quot;{props.input}&quot; in{" "}
        {props.isFolder ? "folders icons" : "files icons"}
      </p>
      <div className="mt-2 flex items-center space-x-2">
        <Link
          to={{
            pathname: props.isFolder ? "/folders" : "/",
          }}
          className={buttonVariants({
            variant: "outline",
          })}
        >
          Show all {props.isFolder ? "folders icons" : "files icons"}
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
