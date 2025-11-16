import type { ComponentProps, FC } from "react";

const Keystatic: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#64748B"
      d="M1 13.5L14.5 0 13 6l9 4.5L8.5 24l1.5-6-9-4.5z"
    ></path>
    <path
      fill="url(#paint0_linear_24673_123)"
      d="M13 6L1 13.5l9 4.5 3-12z"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_24673_123"
        x1="1"
        x2="14.5"
        y1="13.5"
        y2="10.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#94A3B8"></stop>
        <stop offset="1" stopColor="#475569"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default Keystatic;
