import type { ComponentProps, FC } from "react";

const FolderContants: FC<ComponentProps<"svg">> = (props) => (
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
    <rect width="2" height="8" x="15" y="12" fill="#A1A1AA" rx="1"></rect>
    <rect width="2" height="8" x="18" y="12" fill="#A1A1AA" rx="1"></rect>
    <rect width="2" height="8" x="21" y="12" fill="#A1A1AA" rx="1"></rect>
  </svg>
);

export default FolderContants;
