import type { ComponentProps, FC } from "react";
const FluentScmIcon: FC<ComponentProps<"svg">> = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.95 3a2.95 2.95 0 1 1-5.9 0 2.95 2.95 0 0 1 5.9 0M4 4.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5m2.95 8a2.95 2.95 0 1 1-5.9 0 2.95 2.95 0 0 1 5.9 0M4 14.498A1.75 1.75 0 1 0 4 11a1.75 1.75 0 0 0 0 3.5zM12.6 6a3.1 3.1 0 0 1-3.1 3.1h-5V7.9h5A1.9 1.9 0 0 0 11.4 6z"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M14.95 4a2.95 2.95 0 1 1-5.9 0 2.95 2.95 0 0 1 5.9 0M12 5.75a1.75 1.75 0 1 0 0-3.5 1.75 1.75 0 0 0 0 3.5M3.5 11V5h1.2v6z"
    />
  </svg>
);
export default FluentScmIcon;
