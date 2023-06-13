import type { ComponentProps, FC } from "react"

const FolderApp: FC<ComponentProps<"svg">> = (props) => (
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
            fill="#F87171"
            fillRule="evenodd"
            d="M16 12a1 1 0 00-1 1v1.556a1 1 0 001 1h1.556a1 1 0 001-1V13a1 1 0 00-1-1H16zm0 4.444a1 1 0 00-1 1V19a1 1 0 001 1h1.556a1 1 0 001-1v-1.556a1 1 0 00-1-1H16zM19.444 13a1 1 0 011-1H22a1 1 0 011 1v1.556a1 1 0 01-1 1h-1.556a1 1 0 01-1-1V13zm1 3.444a1 1 0 00-1 1V19a1 1 0 001 1H22a1 1 0 001-1v-1.556a1 1 0 00-1-1h-1.556z"
            clipRule="evenodd"
        ></path>
    </svg>
)

export default FolderApp