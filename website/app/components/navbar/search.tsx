import { Input } from "@/ui/input";
import { useSearchParams } from "@remix-run/react";

interface iSearchProps {
  className?: string;
  placeholder?: string;
}

const Search = (props: iSearchProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get("q") ?? "";

  return (
    <Input
      className={props.className}
      type="search"
      name="q"
      placeholder={props.placeholder}
      defaultValue={search}
      autoComplete="off"
      onChange={(e) => {
        setSearchParams({ q: e.target.value });
        if (!e.target.value) {
          setSearchParams({});
        }
      }}
    />
  );
};

export default Search;
