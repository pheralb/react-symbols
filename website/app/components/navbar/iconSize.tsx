import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import { Slider } from "@/ui/slider";
import { iconSizeParamKey } from "@/data/searchParams";

const MIN_SIZE = 20;
const MAX_SIZE = 70;
const DEFAULT_SIZE = 45;

const validateSize = (size: number) => {
  if (isNaN(size) || size < MIN_SIZE) return DEFAULT_SIZE;
  if (size > MAX_SIZE) return MAX_SIZE;
  return size;
};

const IconSize = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [iconSizeValue, setIconSizeValue] = useState(() => {
    const urlSize = Number(searchParams.get(iconSizeParamKey));
    return validateSize(urlSize || DEFAULT_SIZE);
  });

  useEffect(() => {
    const validatedSize = validateSize(iconSizeValue);

    const handleChange = (value: number[]) => {
      const newSearchParams = new URLSearchParams(searchParams);
      if (value[0] === DEFAULT_SIZE) {
        newSearchParams.delete(iconSizeParamKey);
      } else {
        newSearchParams.set(iconSizeParamKey, `${value[0]}`);
      }
      setSearchParams(newSearchParams);
    };

    handleChange([validatedSize]);
  }, [iconSizeValue, searchParams, setSearchParams]);

  return (
    <Slider
      title={`Icon Size: ${iconSizeValue}px`}
      showTooltip={true}
      value={[Number(iconSizeValue)]}
      onValueChange={(value) => setIconSizeValue(value[0])}
      max={MAX_SIZE}
      min={MIN_SIZE}
      step={1}
    />
  );
};

export default IconSize;
