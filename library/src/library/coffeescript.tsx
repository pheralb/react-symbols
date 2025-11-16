import type { ComponentProps, FC } from "react";

const CoffeeScript: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path
      stroke="#EA580C"
      strokeWidth="2"
      d="M19.59 5.25c.964 0 1.746.781 1.746 1.746v4.554a7.201 7.201 0 01-14.321 1.078C6.98 8.5 6.98 10.5 6.98 6.599c.18-.773.873-1.35 1.702-1.35h10.907z"
    ></path>
    <mask
      id="mask0_20564_632"
      style={{ maskType: "alpha" }}
      width="4"
      height="8"
      x="1"
      y="5"
      maskUnits="userSpaceOnUse"
    >
      <path
        fill="#D9D9D9"
        stroke="#F87171"
        d="M-0.5 0.5H1.5V6.5H-0.5z"
        transform="matrix(-1 0 0 1 3.336 5.5)"
      ></path>
    </mask>
    <g mask="url(#mask0_20564_632)">
      <circle
        r="2"
        stroke="#EA580C"
        strokeWidth="2"
        transform="matrix(-1 0 0 1 4.29 9.5)"
      ></circle>
    </g>
  </svg>
);

export default CoffeeScript;
