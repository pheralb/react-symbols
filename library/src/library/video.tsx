import { ComponentProps, FC } from "react"

const Video: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#64748B"
      fillRule="evenodd"
      d="M4 6h16v12H4V6zM2 6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6zm7.5 8.616V9.385a.75.75 0 011.11-.659l4.786 2.616a.75.75 0 010 1.316l-4.786 2.616a.75.75 0 01-1.11-.658z"
      clipRule="evenodd"
    ></path>
  </svg>
)

export default Video
