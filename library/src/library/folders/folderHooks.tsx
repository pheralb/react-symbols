import type { ComponentProps, FC } from "react";

const FolderHooks: FC<ComponentProps<"svg">> = (props) => (
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
      stroke="#8B5CF6"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M16 19.52c0 1.34 1.09 2.43 2.43 2.43s2.43-1.09 2.43-2.43V16"
    ></path>
    <path
      stroke="#8B5CF6"
      strokeLinecap="round"
      strokeWidth="1.5"
      d="M16 19.52v-2.63l1.72 1.72M20.86 15.55a1.65 1.65 0 100-3.3 1.65 1.65 0 000 3.3z"
    ></path>
  </svg>
);

export default FolderHooks;
