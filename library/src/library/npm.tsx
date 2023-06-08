import type { ComponentProps, FC } from "react"

const NPM: FC<ComponentProps<'svg'>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#F87171"
      fillRule="evenodd"
      d="M21 4a1 1 0 00-1-1H4a1 1 0 00-1 1v16.1a1 1 0 001 1h16a1 1 0 001-1V4zm-9 13a1 1 0 01-1 1H7a1 1 0 01-1-1V7a1 1 0 011-1h10a1 1 0 011 1v10a1 1 0 01-1 1h-1a1 1 0 01-1-1v-7a1 1 0 00-1-1h-1a1 1 0 00-1 1v7z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default NPM;
