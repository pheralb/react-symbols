import type { ComponentProps, FC } from "react";
const FluentSidebarRightIcon: FC<ComponentProps<"svg">> = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M1 4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2zm10-1v10h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm-1 0H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h7z" />
  </svg>
);
export default FluentSidebarRightIcon;
