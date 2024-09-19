import { type FC, useState } from "react";

import { Github, Reactjs } from "@react-symbols/icons";
import { toast } from "sonner";
import axios from "axios";
import { highlight } from "sugar-high";

import { camelCase, clipboard } from "@/utils";
import { globals } from "@/globals";

import { Button, buttonVariants } from "@/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/ui/dialog";
import {
  AlertIcon,
  ArrowUpRightIcon,
  CodeIcon,
  CopyIcon,
} from "@/ui/icons/feather";
import ExternalLink from "@/components/externalLink";
import Loading from "@/components/loading";

interface iGetCode {
  componentName: string;
  isFolder: boolean;
  reactComponent: FC<React.SVGProps<SVGSVGElement>>;
}

const GetCode = (props: iGetCode) => {
  const [open, setOpen] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(true);
  const [fileContent, setFileContent] = useState<string>("");

  // ⚙️ Github Urls:
  const ghUrl = props.isFolder
    ? `${globals.githubSrcRepository}library/folders/${camelCase(
        props.componentName,
      )}.tsx`
    : `${globals.githubSrcRepository}library/${camelCase(props.componentName)}.tsx`;
  const ghRawUrl = props.isFolder
    ? `${globals.githubRawUrl}library/folders/${camelCase(props.componentName)}.tsx`
    : `${globals.githubRawUrl}library/${camelCase(props.componentName)}.tsx`;

  const handleGetCode = async () => {
    setOpen(true);
    try {
      const response = await axios.get(ghRawUrl);
      setFileContent(response.data);
    } catch (error) {
      console.error(
        "⚠️ React-Symbols Website - Error fetching the Github Raw URL. Please create a Github Issue.",
        error,
      );
    } finally {
      setLoading(false);
    }
  };

  const handleCopyContent = async () => {
    await clipboard(fileContent);
    toast.success("Copied code to clipboard", {
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
            <div className="my-4 flex flex-col items-center justify-center gap-1">
              <Loading size={40} className="flex items-center justify-center" />
              <p className="animate-pulse text-sm text-zinc-400">
                Fetching component data
              </p>
            </div>
          ) : fileContent ? (
            <div className="my-1 flex flex-col space-y-1 overflow-hidden">
              <div className="mr-1 flex items-center justify-end space-x-2 font-mono text-[12px] text-zinc-400">
                <Reactjs width={16} height={16} />
                <span>{camelCase(props.componentName)}.tsx</span>
              </div>
              <div className="max-h-80 rounded-lg border border-zinc-800 p-3 font-mono text-sm hover:overflow-auto">
                <pre
                  className="select-all"
                  dangerouslySetInnerHTML={{ __html: highlight(fileContent) }}
                />
              </div>
            </div>
          ) : (
            <div className="my-4 flex flex-col items-center justify-center gap-2">
              <AlertIcon
                height={25}
                className="flex items-center justify-center"
              />
              <p className="text-sm text-zinc-400">
                Error fetching component data
              </p>
            </div>
          )}
          <DialogFooter>
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
            <Button variant="outline" onClick={() => handleCopyContent()}>
              <CopyIcon width={14} height={14} strokeWidth={1.5} />
              <span>Copy code</span>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default GetCode;
