import { type FC, useState } from "react";

import { Github } from "@react-symbols/icons";
import { toast } from "sonner";
import axios from "axios";
import { highlight } from "sugar-high";

import { clipboard, lower } from "@/utils";
import { globals } from "@/globals";

import { Button, buttonVariants } from "@/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/ui/dialog";
import { ArrowUpRightIcon, CodeIcon } from "@/ui/icons/feather";
import ExternalLink from "@/components/externalLink";
import Loading from "@/components/loading";

interface iGetCode {
  componentName: string;
  isFolder: boolean;
  reactComponent: FC<React.SVGProps<SVGSVGElement>>;
}

const GetCode = (props: iGetCode) => {
  const [open, setOpen] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);
  const [fileContent, setFileContent] = useState<string>("");

  // ⚙️ Github Urls:
  const ghUrl = props.isFolder
    ? `${globals.githubSrcRepository}library/folders/${lower(
        props.componentName,
      )}.tsx`
    : `${globals.githubSrcRepository}library/${lower(props.componentName)}.tsx`;
  const ghRawUrl = props.isFolder
    ? `${globals.githubRawUrl}library/folders/${lower(props.componentName)}.tsx`
    : `${globals.githubRawUrl}library/${lower(props.componentName)}.tsx`;

  const handleGetCode = async () => {
    setOpen(true);
    setLoading(true);
    try {
      const response = await axios.get(ghRawUrl);
      setFileContent(response.data);
    } catch (error) {
      toast.error("Error fetching file", {
        description: "Unable to obtain component data.",
      });
      console.error(
        "⚠️ React-Symbols Website - Error fetching the Github Raw URL. Please create a Github Issue.",
        error,
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCopyContent = async (code: string, description: string) => {
    await clipboard(code);
    toast.success("Copied to clipboard", {
      description: description,
      icon: <props.reactComponent width={24} height={24} />,
    });
  };

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        onClick={() => handleGetCode()}
        title="Get React Component"
      >
        <CodeIcon width={17} height={17} strokeWidth={1.5} />
      </Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2">
              <props.reactComponent width={24} height={24} />
              <span>{props.componentName}</span>
            </DialogTitle>
          </DialogHeader>
          {isLoading ? (
            <Loading
              size={40}
              className="my-4 flex items-center justify-center"
            />
          ) : fileContent ? (
            <div className="max-h-80 overflow-scroll overflow-y-auto rounded-lg border border-dashed border-zinc-700 p-3 font-mono text-sm">
              <pre
                className="select-all"
                dangerouslySetInnerHTML={{ __html: highlight(fileContent) }}
              />
            </div>
          ) : (
            <p>Error</p>
          )}
          <DialogFooter>
            <Button
              onClick={() =>
                handleCopyContent(
                  `<${props.componentName} />`,
                  `<${props.componentName} />`,
                )
              }
            >
              Copy React Component
            </Button>
            <ExternalLink
              title="Check Source Code"
              href={ghUrl}
              className={buttonVariants({
                variant: "outline",
              })}
            >
              <Github width={17} height={17} />
              <span>View on Github</span>
              <ArrowUpRightIcon width={13} height={13} />
            </ExternalLink>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GetCode;
