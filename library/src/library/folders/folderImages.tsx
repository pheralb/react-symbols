import type { ComponentProps, FC } from "react";

const FolderImages: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect
      width={8.25}
      height={8.25}
      x={14.875}
      y={11.875}
      stroke="#C084FC"
      strokeLinejoin="round"
      strokeWidth={1.25}
      rx={1.625}
    />
    <circle cx={20.5} cy={14.5} r={1} fill="#C084FC" />
    <path
      stroke="#C084FC"
      strokeLinejoin="round"
      strokeWidth={1.25}
      d="m15.5 19.5 2.793-2.793a1 1 0 0 1 1.414 0L22.5 19.5"
    />
    <path
      fill="#64748B"
      fillRule="evenodd"
      d="M5 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h8v-2H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2.784a1 1 0 0 1 .635.227l2.393 1.966a3 3 0 0 0 1.904.682H19a1 1 0 0 1 1 1V10h2v-.125a3 3 0 0 0-3-3h-6.284a1 1 0 0 1-.635-.227L9.688 4.682A3 3 0 0 0 7.784 4H5Z"
      clipRule="evenodd"
    />
  </svg>
);

export default FolderImages;
