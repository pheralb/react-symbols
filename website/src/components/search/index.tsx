import { forwardRef } from "react"

import SearchIcon from "../icons/search"
import XIcon from "../icons/x"

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  clear?: boolean
  clearaction?: () => void
}

const Search = forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, clear, clearaction, ...props }, ref) => {
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
          className="w-full rounded-md border border-neutral-800 bg-neutral-700/10 p-3 pl-10 placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-neutral-700"
          ref={ref}
          {...props}
        />
        {clear && (
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 text-neutral-400">
            <button
              onClick={clearaction}
              className="focus:ring-0.5 rounded-md border-neutral-700 p-1 hover:bg-neutral-700/10 focus:border focus:outline-none focus:ring-neutral-700"
            >
              <div className="pointer-events-none">
                <XIcon width={25} />
              </div>
            </button>
          </div>
        )}
      </div>
    )
  },
)
Search.displayName = "Search"

export default Search
