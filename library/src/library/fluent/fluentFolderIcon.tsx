import type { ComponentProps, FC } from "react";
const FluentFolderIcon: FC<ComponentProps<"svg">> = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M2 5v6a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H7.175l-1.113-.89A.5.5 0 0 0 5.75 3H4a2 2 0 0 0-2 2m1 0a1 1 0 0 1 1-1h1.575l.868.694-.886.806H3zm4.593 0H12a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6.5h2.75a.5.5 0 0 0 .336-.13z" />
  </svg>
);
export default FluentFolderIcon;
