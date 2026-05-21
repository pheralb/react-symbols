import type { ComponentProps, FC } from "react";
const FluentSearchIcon: FC<ComponentProps<"svg">> = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M6.443 0a6.444 6.444 0 0 1 5.004 10.505l4.356 4.355a.667.667 0 0 1-.868 1.008l-.075-.065-4.356-4.355A6.444 6.444 0 1 1 6.444 0zm0 1.333a5.11 5.11 0 1 0 0 10.222 5.11 5.11 0 0 0 0-10.222" />
  </svg>
);
export default FluentSearchIcon;
