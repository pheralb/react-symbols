import type { ComponentProps, FC } from "react";

const FolderShared: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#8B5CF6"
      fillRule="evenodd"
      stroke="#8B5CF6"
      strokeWidth="0.5"
      d="M18.901 12.666c0-.92.75-1.666 1.675-1.666a1.672 1.672 0 011.674 1.666 1.671 1.671 0 01-2.32 1.539 1.674 1.674 0 01-.546-.369l-2.318 1.579c.065.321.033.654-.091.958l2.541 1.67a1.673 1.673 0 011.7-.25 1.669 1.669 0 011.034 1.54c0 .92-.75 1.667-1.674 1.667a1.67 1.67 0 01-1.675-1.666c0-.234.05-.465.145-.678L16.525 17a1.673 1.673 0 01-1.101.41 1.67 1.67 0 01-1.674-1.667 1.67 1.67 0 011.674-1.666c.532 0 1.005.246 1.311.63l2.247-1.529a1.66 1.66 0 01-.08-.512z"
      clipRule="evenodd"
    ></path>
    <path
      fill="#64748B"
      fillRule="evenodd"
      d="M5 4a3 3 0 00-3 3v10a3 3 0 003 3h8v-2H5a1 1 0 01-1-1V7a1 1 0 011-1h2.784a1 1 0 01.635.227l2.393 1.966a3 3 0 001.904.682H19a1 1 0 011 1V10h2v-.125a3 3 0 00-3-3h-6.284a1 1 0 01-.635-.227L9.688 4.682A3 3 0 007.784 4H5z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default FolderShared;
