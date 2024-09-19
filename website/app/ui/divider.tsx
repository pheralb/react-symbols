import { cn } from "@/utils";

interface iDividerProps {
  className?: string;
}

const Divider = (props: iDividerProps) => {
  return <div className={cn("h-7 w-[1.8px] bg-zinc-800", props.className)} />;
};

export default Divider;
