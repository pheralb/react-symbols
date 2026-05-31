import type { ComponentProps, FC } from "react";
const FluentLockIcon: FC<ComponentProps<"svg">> = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M8 1.333A2.667 2.667 0 0 1 10.667 4v1.333h1.166a1.5 1.5 0 0 1 1.5 1.5v6.334a1.5 1.5 0 0 1-1.5 1.5H4.167a1.5 1.5 0 0 1-1.5-1.5V6.833a1.5 1.5 0 0 1 1.5-1.5h1.166V4A2.667 2.667 0 0 1 8 1.333m3.833 5H4.167a.5.5 0 0 0-.5.5v6.334a.5.5 0 0 0 .5.5h7.666a.5.5 0 0 0 .5-.5V6.833a.5.5 0 0 0-.5-.5M8 9a1 1 0 1 1 0 2 1 1 0 0 1 0-2m0-6.667c-.92 0-1.667.747-1.667 1.667v1.333h3.334V4c0-.92-.747-1.667-1.667-1.667" />
  </svg>
);
export default FluentLockIcon;
