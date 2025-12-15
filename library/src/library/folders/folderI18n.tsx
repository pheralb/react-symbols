import type { ComponentProps, FC } from "react";

const FolderI18n: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#64748B"
      fillRule="evenodd"
      d="M5 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h8v-2H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2.784a1 1 0 0 1 .635.227l2.393 1.966a3 3 0 0 0 1.904.682H19a1 1 0 0 1 1 1V10h2v-.125a3 3 0 0 0-3-3h-6.284a1 1 0 0 1-.635-.227L9.688 4.682A3 3 0 0 0 7.784 4z"
      clipRule="evenodd"
    ></path>
    <path
      fill="#C084FC"
      fillRule="evenodd"
      d="m18.935 17.535-1.27-1.255.015-.016A8.8 8.8 0 0 0 19.535 13H21v-1h-3.5v-1h-1v1H13v1h5.585A7.9 7.9 0 0 1 17 15.675 7.8 7.8 0 0 1 15.845 14h-1a8.8 8.8 0 0 0 1.49 2.28l-2.545 2.51.71.71L17 17l1.555 1.555zM21.75 15h-1l-2.25 6h1l.56-1.5h2.375L23 21h1zm-1.31 3.5.81-2.165.81 2.165z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default FolderI18n;
