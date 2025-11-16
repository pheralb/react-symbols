import type { ComponentProps, FC } from "react";

const Crystal: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 20 20"
    {...props}
  >
    <path
      fill="#fff"
      d="M8.22 2L2 7.23l1.41 7.993L11.031 18l6.206-5.215-1.41-7.994L8.22 2z"
    ></path>
    <path fill="#000" d="M2 7.23l7.993-1.41-2.776 7.627L2 7.23z"></path>
  </svg>
);

export default Crystal;
