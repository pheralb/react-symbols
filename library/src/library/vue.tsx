import type { ComponentProps, FC } from "react"

const Vue: FC<ComponentProps<'svg'>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#14B8A6"
      d="M14.079 4.411L12 8.011l-2.078-3.6H3L12 20l9-15.589h-6.921z"
    ></path>
    <path
      fill="#334155"
      d="M14.079 4.411L12 8.011l-2.078-3.6H6.6l5.4 9.353 5.4-9.353h-3.321z"
    ></path>
  </svg>
);

export default Vue;
