import { cn } from "@/utils";
import ExternalLink from "./externalLink";
import { containerClasses } from "@/ui/container";

const Footer = () => {
  return (
    <footer className="animate-in slide-in-from-bottom-3 fade-in-30 fixed bottom-0 w-full bg-zinc-50 py-4 text-sm text-zinc-600 backdrop-blur-sm dark:bg-zinc-900/80 dark:text-zinc-400">
      <div
        className={cn(containerClasses, "flex items-center justify-between")}
      >
        <ExternalLink
          title="Miguel Solorio"
          href="https://www.miguelsolorio.com/"
          className="group flex items-center space-x-2 transition-colors hover:text-black dark:hover:text-white"
        >
          <span className="hidden md:block">Icons crafted by </span>
          <img
            className="group-hover:ring-react-symbol-pink h-6 w-6 rounded-full transition-shadow group-hover:ring-2"
            src="https://avatars.githubusercontent.com/u/35271042?v=4"
            alt="Miguel Solorio"
          />
          <span className="group-hover:decoration-react-symbol-pink underline decoration-zinc-500 decoration-wavy underline-offset-[4px]">
            Miguel Solorio
          </span>
        </ExternalLink>
        <ExternalLink
          title="Pablo Hernández"
          href="https://pheralb.dev"
          className="group flex items-center space-x-2 transition-colors hover:text-black dark:hover:text-white"
        >
          <span className="hidden md:block">Website by</span>
          <img
            className="group-hover:ring-react-symbol-aqua h-6 w-6 rounded-full transition-shadow group-hover:ring-2"
            src="https://avatars.githubusercontent.com/u/62877300?v=4"
            alt="Pablo Hernández"
          />
          <span className="group-hover:decoration-react-symbol-aqua underline decoration-zinc-500 decoration-wavy underline-offset-[4px]">
            Pablo Hernández
          </span>
        </ExternalLink>
      </div>
    </footer>
  );
};

export default Footer;
