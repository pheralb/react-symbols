import type { ComponentProps, FC } from "react"

const License: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#64748B"
      d="M13.768 10.233l1.768-1.768a5 5 0 100 7.071l-1.768-1.768a2.5 2.5 0 110-3.535z"
    ></path>
    <path
      fill="#64748B"
      d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 17.5a7.5 7.5 0 110-15 7.5 7.5 0 110 15z"
    ></path>
  </svg>
)

export default License
