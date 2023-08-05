import type { ComponentProps, FC } from "react"

const FolderLayout: FC<ComponentProps<"svg">> = (props) => (
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
   fill="#0EA5E9"
   fillRule="evenodd"
   d="M14 13.283c0-.708.575-1.283 1.283-1.283h2.284c.709 0 1.283.575 1.283 1.283v6.133c0 .708-.575 1.283-1.283 1.283h-2.284A1.283 1.283 0 0114 19.416v-6.133zm6.15 0c0-.708.575-1.283 1.284-1.283h1.283c.709 0 1.283.575 1.283 1.283v1.283c0 .709-.575 1.283-1.283 1.283h-1.283a1.283 1.283 0 01-1.283-1.283v-1.283zm1 3.566a1 1 0 00-1 1v1.85a1 1 0 001 1H23a1 1 0 001-1v-1.85a1 1 0 00-1-1h-1.85z"
   clipRule="evenodd"
  ></path>
 </svg>
)

export default FolderLayout
