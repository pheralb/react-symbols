import type { ComponentProps, FC } from "react";

const FolderSrc: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#64748B"
      fillRule="evenodd"
      d="M5 4a3 3 0 00-3 3v10a3 3 0 003 3h7v-2H5a1 1 0 01-1-1V7a1 1 0 011-1h2.784a1 1 0 01.635.227l2.393 1.966a3 3 0 001.904.682H19a1 1 0 011 1V10h2v-.125a3 3 0 00-3-3h-6.284a1 1 0 01-.635-.227L9.688 4.682A3 3 0 007.784 4H5z"
      clipRule="evenodd"
    ></path>
    <path
      stroke="#EAB308"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.25"
      d="M16.09 13.467l-1.894 1.894 1.895 1.895M21.328 13.467l1.894 1.894-1.894 1.895M17.34 18.52l2.738-6.317"
    ></path>
  </svg>
);

export default FolderSrc;
