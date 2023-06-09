import type { ComponentProps, FC } from "react"

const Copy: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="currentColor"
      fillOpacity="0.16"
      d="M18.6 9h-7.2A2.4 2.4 0 009 11.4v7.2a2.4 2.4 0 002.4 2.4h7.2a2.4 2.4 0 002.4-2.4v-7.2A2.4 2.4 0 0018.6 9z"
    ></path>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      strokeWidth="1.5"
      d="M6 15h-.6C4.07 15 3 13.93 3 12.6V5.4C3 4.07 4.07 3 5.4 3h7.2C13.93 3 15 4.07 15 5.4V6m-3.6 3h7.2a2.4 2.4 0 012.4 2.4v7.2a2.4 2.4 0 01-2.4 2.4h-7.2A2.4 2.4 0 019 18.6v-7.2A2.4 2.4 0 0111.4 9z"
    ></path>
  </svg>
)

export default Copy
