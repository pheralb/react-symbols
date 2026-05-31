import type { ComponentProps, FC } from "react";
const FluentSidebarLeftCollapseIcon: FC<ComponentProps<"svg">> = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M3 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2zm3 11V3h7a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1z" />
  </svg>
);
export default FluentSidebarLeftCollapseIcon;
