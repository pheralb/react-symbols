import type { ComponentProps, FC } from "react"

const FolderRouter: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#16A34A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      d="M14 14.625V12h2.625m3.5 0h2.625v2.625"
    ></path>
    <path
      stroke="#16A34A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      d="M14 12l3.862 3.862c.329.328.513.773.513 1.237m0 0V20m0-2.9c0-.465.184-.91.513-1.238L22.75 12"
    ></path>
    <path
      fill="#64748B"
      fillRule="evenodd"
      d="M5 4a3 3 0 00-3 3v10a3 3 0 003 3h8v-2H5a1 1 0 01-1-1V7a1 1 0 011-1h2.784a1 1 0 01.635.227l2.393 1.966a3 3 0 001.904.682H19a1 1 0 011 1V10h2v-.125a3 3 0 00-3-3h-6.284a1 1 0 01-.635-.227L9.688 4.682A3 3 0 007.784 4H5z"
      clipRule="evenodd"
    ></path>
  </svg>
)

export default FolderRouter
