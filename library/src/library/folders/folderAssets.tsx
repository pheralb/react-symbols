import type { ComponentProps, FC } from "react";

const FolderAssets: FC<ComponentProps<"svg">> = (props) => (
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
    <circle cx="21" cy="18" r="2" fill="#2563EB"></circle>
    <rect width="4" height="4" x="14" y="11" fill="#0D9488" rx="1"></rect>
    <path fill="#22D3EE" d="M16 16.5l1.732 3h-3.464l1.732-3z"></path>
    <path
      fill="#C084FC"
      d="M20.308 11.871c.237-.643 1.147-.643 1.384 0a.738.738 0 00.437.436c.642.238.642 1.148 0 1.386a.738.738 0 00-.437.436c-.237.643-1.147.643-1.384 0a.738.738 0 00-.437-.436c-.642-.238-.642-1.148 0-1.386a.738.738 0 00.437-.436z"
    ></path>
  </svg>
);

export default FolderAssets;
