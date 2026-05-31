import type { ComponentProps, FC } from "react";
const FluentBeakerIcon: FC<ComponentProps<"svg">> = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M4.73 1.333h.89v5.545a2 2 0 0 1-.243.955l-3.186 5.87A1.556 1.556 0 0 0 3.558 16h9.456c1.18 0 1.93-1.261 1.368-2.298l-3.187-5.87a2 2 0 0 1-.242-.954V1.333h.889a.667.667 0 1 0 0-1.333H4.73a.667.667 0 0 0 0 1.333m2.223 5.545V1.333h2.666v5.545c0 .556.14 1.103.404 1.59l.71 1.31H5.839l.71-1.31a3.33 3.33 0 0 0 .405-1.59zm-1.839 4.233h6.344l1.752 3.227a.222.222 0 0 1-.196.329H3.558a.222.222 0 0 1-.196-.329z" />
  </svg>
);
export default FluentBeakerIcon;
