import { useSearchParams } from "@remix-run/react";

import { Input } from "@/ui/input";
import { Slider } from "@/ui/slider";
import { iconSizeParamKey, searchParamKey } from "@/data/searchParams";
import { useEffect, useState } from "react";

interface iSearchProps {
  className?: string;
  placeholder?: string;
}

// 🔎 Search Input:
export const Search = (props: iSearchProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get(searchParamKey) ?? "";

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (!e.target.value) {
      newSearchParams.delete(searchParamKey);
    } else {
      newSearchParams.set(searchParamKey, e.target.value);
    }
    setSearchParams(newSearchParams);
  };

  return (
    <Input
      className={props.className}
      type="search"
      name={searchParamKey}
      placeholder={props.placeholder}
      defaultValue={search}
      autoComplete="off"
      onChange={(e) => handleChange(e)}
    />
  );
};

// 📏 Icon Size Slider:
export const IconSize = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [iconSizeValue, setIconSizeValue] = useState(
    Number(searchParams.get(iconSizeParamKey)) || 45,
  );

  const handleChange = (value: number[]) => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (value[0] === 45) {
      newSearchParams.delete(iconSizeParamKey);
    } else {
      newSearchParams.set(iconSizeParamKey, `${value[0]}`);
    }
    setSearchParams(newSearchParams);
  };

  useEffect(() => {
    handleChange([iconSizeValue]);
  }, [iconSizeValue]);

  return (
    <Slider
      title="Icon Size"
      value={[Number(iconSizeValue)]}
      onValueChange={(value) => setIconSizeValue(value[0])}
      max={70}
      min={20}
      step={1}
    />
  );
};
