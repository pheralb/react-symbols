import type { ComponentProps, FC } from "react"

const Code: FC<ComponentProps<"svg">> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M8 6l-6 6 6 6m8 0l6-6-6-6"
    ></path>
  </svg>
)

export default Code
