import type { ComponentProps, FC } from "react";

const FolderBuild: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#C084FC"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18.073 11.128c.306-.17.679-.17.985 0l3.813 2.117c.16.09.26.26.26.444v4.177c0 .369-.2.709-.521.887l-3.552 1.973c-.306.17-.679.17-.985 0l-3.551-1.973a1.01 1.01 0 0 1-.522-.887V13.69c0-.184.1-.354.26-.444z"
    ></path>
    <path
      stroke="#C084FC"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m16.283 12.122 4.566 2.537v1.775"
    ></path>
    <path
      stroke="#C084FC"
      strokeLinejoin="round"
      d="m14 13.39 4.566 2.537m0 0 4.566-2.536m-4.566 2.536V21"
    ></path>
    <path
      fill="#64748B"
      fillRule="evenodd"
      d="M5 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h8v-2H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2.784a1 1 0 0 1 .635.227l2.393 1.966a3 3 0 0 0 1.904.682H19a1 1 0 0 1 1 1V10h2v-.125a3 3 0 0 0-3-3h-6.284a1 1 0 0 1-.635-.227L9.688 4.682A3 3 0 0 0 7.784 4z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default FolderBuild;
