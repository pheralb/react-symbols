import { useSearchParams } from "react-router";

import { Input } from "@/ui/input";
import { searchParamKey } from "@/data/searchParams";

interface iSearchProps {
  className?: string;
  placeholder?: string;
}

const Search = (props: iSearchProps) => {
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

export default Search;
