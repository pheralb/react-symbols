import { cn } from "@/utils";
import type { ReactNode } from "react";

interface iGrid {
  children: ReactNode;
  className?: string;
}

const Grid = (props: iGrid) => {
  return (
    <section
      className={cn(
        "grid grid-cols-1 gap-4 md:grid-cols-4 lg:grid-cols-6",
        props.className,
      )}
    >
      {props.children}
    </section>
  );
};

export default Grid;
