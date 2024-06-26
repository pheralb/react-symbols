import type { ComponentProps, FC } from "react"

const FolderModules: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#0EA5E9"
      d="M18.841 12c-.57 0-1.032.462-1.032 1.032v.619h-1.65a.825.825 0 00-.826.825v1.238c0 .228.185.413.413.413h.147c.54 0 1.031.388 1.085.925a1.031 1.031 0 01-1.026 1.139h-.206a.413.413 0 00-.413.412v1.238c0 .456.37.826.826.826h1.238a.413.413 0 00.413-.413v-.148c0-.54.388-1.03.925-1.084a1.031 1.031 0 011.138 1.026v.206c0 .228.185.413.413.413h1.238c.456 0 .825-.37.825-.826v-1.65h.62a1.032 1.032 0 100-2.064h-.62v-1.65a.825.825 0 00-.825-.826h-1.651v-.62c0-.57-.462-1.031-1.032-1.031z"
    ></path>
    <path
      fill="#64748B"
      fillRule="evenodd"
      d="M5 4a3 3 0 00-3 3v10a3 3 0 003 3h8v-2H5a1 1 0 01-1-1V7a1 1 0 011-1h2.784a1 1 0 01.635.227l2.393 1.966a3 3 0 001.904.682H19a1 1 0 011 1V10h2v-.125a3 3 0 00-3-3h-6.284a1 1 0 01-.635-.227L9.688 4.682A3 3 0 007.784 4H5z"
      clipRule="evenodd"
    ></path>
  </svg>
)

export default FolderModules
