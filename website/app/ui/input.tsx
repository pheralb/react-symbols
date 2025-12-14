import type { ComponentProps } from "react";
import { cn } from "@/utils";

const Input = ({ type, className, ...props }: ComponentProps<"input">) => {
  return (
    <input
      type={type}
      className={cn(
        "flex h-9 w-full rounded-md border border-zinc-200 bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-zinc-500 focus-visible:ring-1 focus-visible:ring-zinc-300 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 dark:border-zinc-800 dark:placeholder:text-zinc-400 dark:focus-visible:ring-zinc-900",
        className,
      )}
      {...props}
    />
  );
};

export { Input };
