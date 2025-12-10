import type { ComponentProps, FC } from "react";

const Svx: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#EA580C"
      strokeWidth="2"
      d="M21.726 15.446 14.83 8.552m.059 6.896 6.896-6.896"
    ></path>
    <path
      fill="#EA580C"
      d="M3 15.714V8h2.323l2.322 2.836L9.968 8h2.322v7.714H9.968V11.29l-2.323 2.836-2.322-2.836v4.424z"
    ></path>
  </svg>
);

export default Svx;
