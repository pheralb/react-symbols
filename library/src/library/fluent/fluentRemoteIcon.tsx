import type { ComponentProps, FC } from "react";
const FluentRemoteIcon: FC<ComponentProps<"svg">> = (props) => (
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
      d="M13.829 3A.586.586 0 0 0 13 2.17l-4.097 4.1a.585.585 0 0 0 0 .828l4.098 4.097a.585.585 0 0 0 .828-.827l-3.684-3.684zM2.17 5.462A.585.585 0 0 1 3 4.635l4.098 4.097c.228.229.228.6 0 .828L3 13.658a.586.586 0 0 1-.828-.828l3.684-3.684-3.684-3.683z"
    />
  </svg>
);
export default FluentRemoteIcon;
