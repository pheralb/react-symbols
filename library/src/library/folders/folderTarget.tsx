import type { ComponentProps, FC } from "react"

const FolderTarget: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#64748B"
      fillRule="evenodd"
      d="M5 4a3 3 0 00-3 3v10a3 3 0 003 3h8v-2H5a1 1 0 01-1-1V7a1 1 0 011-1h2.784a1 1 0 01.635.227l2.393 1.966a3 3 0 001.904.682H19a1 1 0 011 1V10h2v-.125a3 3 0 00-3-3h-6.284a1 1 0 01-.635-.227L9.688 4.682A3 3 0 007.784 4H5z"
      clipRule="evenodd"
    ></path>
    <path
      fill="#C084FC"
      fillRule="evenodd"
      d="M19 14.889a1.111 1.111 0 100 2.222 1.111 1.111 0 000-2.222zM16.778 16a2.222 2.222 0 114.444 0 2.222 2.222 0 01-4.444 0z"
      clipRule="evenodd"
    ></path>
    <path
      fill="#C084FC"
      fillRule="evenodd"
      d="M19 12.111a3.889 3.889 0 100 7.778 3.889 3.889 0 000-7.778zM14 16a5 5 0 1110 0 5 5 0 01-10 0z"
      clipRule="evenodd"
    ></path>
  </svg>
)

export default FolderTarget
