import { useSearchParams } from "react-router";

import { Input } from "@/ui/input";
import { searchParamKey } from "@/data/searchParams";
import { useEffect, useRef, useState, type ChangeEvent } from "react";
import { CommandIcon } from "lucide-react";

interface iSearchProps {
  className?: string;
  placeholder?: string;
}

const Search = (props: iSearchProps) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const search = searchParams.get(searchParamKey) ?? "";
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        if (inputRef.current) {
          inputRef.current.focus();
        }
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newSearchParams = new URLSearchParams(searchParams);
    if (!e.target.value) {
      newSearchParams.delete(searchParamKey);
    } else {
      newSearchParams.set(searchParamKey, e.target.value);
    }
    setSearchParams(newSearchParams);
  };

  return (
    <div className="relative">
      <Input
        ref={inputRef}
        className={props.className}
        type="search"
        name={searchParamKey}
        placeholder={props.placeholder}
        defaultValue={search}
        autoComplete="off"
        onChange={(e) => handleChange(e)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {!isFocused && !search && (
        <kbd className="pointer-events-none absolute top-1/2 right-2 flex -translate-y-1/2 items-center gap-1 rounded bg-zinc-200 p-1 font-mono text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
          <CommandIcon size={14} />
          <span>K</span>
        </kbd>
      )}
    </div>
  );
};

export default Search;
