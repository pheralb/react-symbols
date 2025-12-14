import type { ComponentProps, FC } from "react";

const FolderDocuments: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#64748B"
      d="M7.784 4a3 3 0 0 1 1.904.682l2.393 1.965.143.098a1 1 0 0 0 .492.13H19a3 3 0 0 1 3 3V10h-2v-.125a1 1 0 0 0-1-1h-6.284a3 3 0 0 1-1.696-.526l-.208-.156-2.393-1.965A1 1 0 0 0 7.784 6H5a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8v2H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3z"
    ></path>
    <path
      stroke="#64748B"
      strokeLinejoin="round"
      strokeWidth="1.25"
      d="M22.792 20c0 .345-.28.625-.625.625H15.5a.625.625 0 0 1-.625-.625v-8c0-.345.28-.625.625-.625h3.889c.142 0 .28.048.39.137l2.778 2.222a.63.63 0 0 1 .235.489z"
    ></path>
    <path
      stroke="#64748B"
      strokeLinejoin="round"
      strokeWidth="1.25"
      d="M18.833 12v2.778h3.334"
    ></path>
  </svg>
);

export default FolderDocuments;
