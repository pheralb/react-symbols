import type { ComponentProps, FC } from "react";

const Java: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path
      stroke="#F87171"
      strokeWidth="2"
      d="M5.334 3.75c-.965 0-1.748.781-1.748 1.746v4.554a7.201 7.201 0 0014.322 1.078c.035-4.128.035-2.128.035-6.029a1.748 1.748 0 00-1.702-1.35H5.334z"
    ></path>
    <path
      stroke="#F87171"
      strokeLinecap="round"
      strokeWidth="2"
      d="M4.086 20.251L20.086 20.251"
    ></path>
    <mask
      id="mask0_20565_673"
      style={{ maskType: "alpha" }}
      width="4"
      height="7"
      x="20"
      y="4"
      maskUnits="userSpaceOnUse"
    >
      <path
        fill="#D9D9D9"
        stroke="#F87171"
        d="M21.086 4.5H23.086V10.5H21.086z"
      ></path>
    </mask>
    <g mask="url(#mask0_20565_673)">
      <circle
        cx="20.632"
        cy="8"
        r="2"
        stroke="#F87171"
        strokeWidth="2"
      ></circle>
    </g>
  </svg>
);

export default Java;
