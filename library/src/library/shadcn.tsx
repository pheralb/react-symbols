import type { ComponentProps, FC } from "react";

const Shadcn: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#64748B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.5"
      d="M18.25 12 12 18.25M17 5.125 5.125 17"
    ></path>
  </svg>
);

export default Shadcn;
