import type { ComponentProps, FC } from "react";

const FolderInterfaces: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#2563EB"
      stroke="#2563EB"
      strokeWidth="0.5"
      d="M14 12a1 1 0 011-1h7a1 1 0 011 1v7a1 1 0 01-1 1h-7a1 1 0 01-1-1v-7zm.818 2.091v5.09h7.364v-5.09h-7.364zm7.364-.818v-1.455h-7.364v1.455h7.364zM16.046 15.5a.41.41 0 01.41-.41v0a.41.41 0 01.41.41v0a.41.41 0 01-.41.41v0a.41.41 0 01-.41-.41v0zm1.636 0a.41.41 0 01.41-.41v0a.41.41 0 01.41.41v0a.41.41 0 01-.41.41v0a.41.41 0 01-.41-.41v0zm1.636 0a.41.41 0 01.41-.41v0a.41.41 0 01.41.41v0a.41.41 0 01-.41.41v0a.41.41 0 01-.41-.41v0z"
    ></path>
    <path
      fill="#64748B"
      fillRule="evenodd"
      d="M5 4a3 3 0 00-3 3v10a3 3 0 003 3h8v-2H5a1 1 0 01-1-1V7a1 1 0 011-1h2.784a1 1 0 01.635.227l2.393 1.966a3 3 0 001.904.682H19a1 1 0 011 1V10h2v-.125a3 3 0 00-3-3h-6.284a1 1 0 01-.635-.227L9.688 4.682A3 3 0 007.784 4H5z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default FolderInterfaces;
