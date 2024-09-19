/* eslint-disable react/prop-types */
import * as SliderPrimitive from "@radix-ui/react-slider";

import { cn } from "@/utils";
import { forwardRef, useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./tooltip";

const Slider = forwardRef<
  React.ElementRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => {
  const [showTooltipState, setShowTooltipState] = useState(false);
  const handlePointerDown = () => {
    setShowTooltipState(true);
  };

  const handlePointerUp = () => {
    setShowTooltipState(false);
  };

  useEffect(() => {
    document.addEventListener("pointerup", handlePointerUp);
    return () => {
      document.removeEventListener("pointerup", handlePointerUp);
    };
  }, []);

  return (
    <SliderPrimitive.Root
      ref={ref}
      className={cn(
        "relative flex w-full touch-none select-none items-center",
        className,
      )}
      {...props}
    >
      <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-zinc-900/20 dark:bg-zinc-800">
        <SliderPrimitive.Range className="absolute h-full bg-zinc-900 dark:bg-zinc-600" />
      </SliderPrimitive.Track>
      <TooltipProvider>
        <Tooltip delayDuration={0} open={showTooltipState}>
          <TooltipTrigger asChild>
            <SliderPrimitive.Thumb
              title="Increase or decrease the size"
              onMouseEnter={() => setShowTooltipState(true)}
              onMouseLeave={() => setShowTooltipState(false)}
              onFocus={() => setShowTooltipState(true)}
              onBlur={() => setShowTooltipState(false)}
              className="block h-4 w-4 rounded-full border border-zinc-200 border-zinc-900/50 bg-white shadow transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-950 disabled:pointer-events-none disabled:opacity-50 dark:border-zinc-50/50 dark:border-zinc-800 dark:bg-zinc-500 dark:focus-visible:ring-zinc-600"
            />
          </TooltipTrigger>
          <TooltipContent align="center" side="top" className="text-center">
            {props.value?.at(0)}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </SliderPrimitive.Root>
  );
});
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
