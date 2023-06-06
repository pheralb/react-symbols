import type { ComponentProps, FC } from "react"

const SearchIcon: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M21 21l-4-4m2-6a8 8 0 11-16 0 8 8 0 0116 0z"
    ></path>
  </svg>
)

export default SearchIcon
