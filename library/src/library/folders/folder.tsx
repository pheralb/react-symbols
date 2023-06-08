import type { ComponentProps, FC } from "react"

const Folder: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#64748B"
      strokeWidth="2"
      d="M7.784 5H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V9.875a2 2 0 00-2-2h-6.284a2 2 0 01-1.27-.455L9.054 5.455A2 2 0 007.783 5z"
    ></path>
  </svg>
)

export default Folder
