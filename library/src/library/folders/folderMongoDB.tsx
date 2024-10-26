import type { ComponentProps, FC } from "react";

const FolderMongoDB: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#64748B"
      fillRule="evenodd"
      d="M5 4a3 3 0 00-3 3v10a3 3 0 003 3h10v-2H5a1 1 0 01-1-1V7a1 1 0 011-1h2.784a1 1 0 01.635.227l2.393 1.966a3 3 0 001.904.682H19a1 1 0 011 1V10h2v-.125a3 3 0 00-3-3h-6.284a1 1 0 01-.635-.227L9.688 4.682A3 3 0 007.784 4H5z"
      clipRule="evenodd"
    ></path>
    <path
      fill="#00ED64"
      d="M20.43 13.115a17.944 17.944 0 01-.915-1.11.021.021 0 00-.03 0c-.079.106-.466.612-.915 1.11-3.858 4.594.608 7.695.608 7.695l.037.023c.033.478.116 1.167.116 1.167h.333s.084-.685.117-1.167l.037-.027c.005 0 4.47-3.097.612-7.691zm-.932 7.624s-.2-.159-.254-.24v-.008l.241-5.003c0-.016.026-.016.026 0l.24 5.003v.007c-.053.082-.253.241-.253.241z"
    ></path>
  </svg>
);

export default FolderMongoDB;
