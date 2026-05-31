import { useState } from "react";
import { useLocation, useSearchParams } from "react-router";

import { Slider } from "@/ui/slider";
import { iconSizeParamKey } from "@/data/searchParams";

const MIN_SIZE = 20;
const MAX_SIZE = 70;
const DEFAULT_SIZE = 45;
const DEFAULT_FLUENT_SIZE = 30;

const validateSize = (size: number, fallback: number) => {
  if (isNaN(size) || size < MIN_SIZE) return fallback;
  if (size > MAX_SIZE) return MAX_SIZE;
  return size;
};

const IconSize = () => {
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  const defaultSize =
    location.pathname === "/fluent" ? DEFAULT_FLUENT_SIZE : DEFAULT_SIZE;

  const urlSize = Number(searchParams.get(iconSizeParamKey));
  const committedSize = urlSize ? validateSize(urlSize, defaultSize) : defaultSize;

  const [localSize, setLocalSize] = useState(committedSize);
  const [prevDefault, setPrevDefault] = useState(defaultSize);

  // Reset local size when route changes (setState during render — no useEffect needed)
  if (prevDefault !== defaultSize) {
    setPrevDefault(defaultSize);
    setLocalSize(committedSize);
  }

  const handleCommit = (value: number[]) => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (value[0] === defaultSize) {
      newSearchParams.delete(iconSizeParamKey);
    } else {
      newSearchParams.set(iconSizeParamKey, `${value[0]}`);
    }
    setSearchParams(newSearchParams);
  };

  return (
    <div className="flex w-full flex-col space-y-1.5 pb-1 text-zinc-600 hover:text-black md:w-56 md:pb-0 dark:text-zinc-400 dark:hover:text-white">
      <div className="flex w-full items-center justify-between">
        <p className="text-xs font-medium uppercase select-none">Size</p>
        <span className="font-mono text-xs text-zinc-600 dark:text-zinc-400">{`${localSize}px`}</span>
      </div>
      <Slider
        title={`Icon Size: ${localSize}px`}
        value={[localSize]}
        onValueChange={(value) => setLocalSize(value[0])}
        onValueCommit={handleCommit}
        max={MAX_SIZE}
        min={MIN_SIZE}
        step={1}
      />
    </div>
  );
};

export default IconSize;
