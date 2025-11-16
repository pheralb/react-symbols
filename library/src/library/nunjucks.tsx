import type { ComponentProps, FC } from "react";

const Nunjucks: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#2DD4BF"
      stroke="#2DD4BF"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M7.487 9H10.299V18.374000000000002H7.487z"
      transform="rotate(15.384 7.487 9)"
    ></path>
    <path
      fill="#2DD4BF"
      stroke="#2DD4BF"
      strokeLinejoin="round"
      strokeWidth="1.5"
      d="M0 0H2.812V9.374H0z"
      transform="scale(-1 1) rotate(15.384 -41.673 -57.365)"
    ></path>
    <path
      stroke="#2DD4BF"
      strokeWidth="1.5"
      d="M9 9c.5-1.167 1.5-4.5 3-4.5s2.833 3.333 3.5 4.5"
    ></path>
  </svg>
);

export default Nunjucks;
