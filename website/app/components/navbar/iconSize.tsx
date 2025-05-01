import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";

import { Slider } from "@/ui/slider";
import { iconSizeParamKey } from "@/data/searchParams";

const IconSize = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [iconSizeValue, setIconSizeValue] = useState(
    Number(searchParams.get(iconSizeParamKey)) || 45,
  );

  useEffect(() => {
    const handleChange = (value: number[]) => {
      const newSearchParams = new URLSearchParams(searchParams);
      if (value[0] === 45) {
        newSearchParams.delete(iconSizeParamKey);
      } else {
        newSearchParams.set(iconSizeParamKey, `${value[0]}`);
      }
      setSearchParams(newSearchParams);
    };

    handleChange([iconSizeValue]);
  }, [iconSizeValue, searchParams, setSearchParams]);

  return (
    <Slider
      title={`Icon Size: ${iconSizeValue}px`}
      showTooltip={true}
      value={[Number(iconSizeValue)]}
      onValueChange={(value) => setIconSizeValue(value[0])}
      max={70}
      min={20}
      step={1}
    />
  );
};

export default IconSize;
