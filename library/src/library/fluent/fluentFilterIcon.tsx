import type { ComponentProps, FC } from "react";
const FluentFilterIcon: FC<ComponentProps<"svg">> = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M6.667 10.667h2.666a.667.667 0 0 1 .078 1.329L9.333 12H6.667a.667.667 0 0 1-.078-1.329zh2.666zM5.333 7.333h5.334a.667.667 0 0 1 .077 1.33l-.077.004H5.333a.667.667 0 0 1-.077-1.33zh5.334zM3.333 4h9.334a.667.667 0 0 1 .077 1.329l-.077.004H3.333a.667.667 0 0 1-.077-1.329zh9.334z" />
  </svg>
);
export default FluentFilterIcon;
