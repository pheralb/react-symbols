import type { ComponentProps, FC } from "react";

const Turborepo: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#E4E4E7"
      d="M12 6c-3.308 0-6 2.692-6 6s2.692 6 6 6 6-2.692 6-6-2.692-6-6-6zm0 9.105a3.105 3.105 0 110-6.21 3.105 3.105 0 010 6.21z"
    ></path>
    <path
      fill="url(#paint0_linear_22527_86)"
      fillRule="evenodd"
      d="M12.537 4.425V1.998C17.81 2.28 22 6.647 22 11.991c0 5.343-4.19 9.709-9.463 9.992v-2.427c3.93-.28 7.043-3.565 7.043-7.566 0-4-3.113-7.285-7.043-7.565zM6.26 16.952a7.556 7.556 0 01-1.833-4.417H2a9.965 9.965 0 002.543 6.134l1.717-1.717zm5.187 5.03v-2.426a7.549 7.549 0 01-4.419-1.833L5.312 19.44a9.964 9.964 0 006.134 2.543h.002z"
      clipRule="evenodd"
    ></path>
    <defs>
      <linearGradient
        id="paint0_linear_22527_86"
        x1="12.929"
        x2="3.093"
        y1="3.404"
        y2="13.24"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0096FF"></stop>
        <stop offset="1" stopColor="#FF1E56"></stop>
      </linearGradient>
    </defs>
  </svg>
);

export default Turborepo;
