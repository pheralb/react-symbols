import type { ComponentProps, FC } from "react";

const FolderAngular: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#F87171"
      d="m24 12.834-.361 5.892L20.186 11zm-2.391 7.62L19 22l-2.609-1.547.53-1.336h4.157zM19 13.932l1.367 3.453h-2.734zm-4.643 4.793L14 12.834 17.814 11z"
    ></path>
    <path
      fill="#64748B"
      fillRule="evenodd"
      d="M5 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h8v-2H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2.784a1 1 0 0 1 .635.227l2.393 1.966a3 3 0 0 0 1.904.682H19a1 1 0 0 1 1 1V10h2v-.125a3 3 0 0 0-3-3h-6.284a1 1 0 0 1-.635-.227L9.688 4.682A3 3 0 0 0 7.784 4z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default FolderAngular;
