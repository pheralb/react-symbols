import type { ComponentProps, FC } from "react"

const XIcon: FC<ComponentProps<"svg">> = (props) => (
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
      d="M7.757 16.243l8.486-8.486m0 8.486L7.757 7.757"
    ></path>
  </svg>
)

export default XIcon
