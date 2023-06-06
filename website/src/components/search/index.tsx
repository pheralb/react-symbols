import { forwardRef } from "react"
import SearchIcon from "../icons/search"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Search = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-400">
          <div className="pointer-events-none">
            <SearchIcon width={18} />
          </div>
        </div>
        <input
          type="text"
          autoComplete="off"
          className="w-full rounded-md border border-neutral-200 bg-neutral-200/50 p-3 pl-10 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-300 dark:border-neutral-800 dark:bg-neutral-700/10 dark:focus:ring-neutral-700"
          ref={ref}
          {...props}
        />
      </div>
    )
  },
)
Search.displayName = "Search"

export default Search
