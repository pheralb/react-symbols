import type { ComponentProps, FC } from "react"

const PNPM: FC<ComponentProps<'svg'>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#F59E0B"
      d="M20 7.768a1 1 0 01-1 1h-2.768a1 1 0 01-1-1V5a1 1 0 011-1H19a1 1 0 011 1v2.768zM14.384 7.768a1 1 0 01-1 1h-2.768a1 1 0 01-1-1V5a1 1 0 011-1h2.768a1 1 0 011 1v2.768zM8.768 7.768a1 1 0 01-1 1H5a1 1 0 01-1-1V5a1 1 0 011-1h2.768a1 1 0 011 1v2.768zM20 13.384a1 1 0 01-1 1h-2.768a1 1 0 01-1-1v-2.768a1 1 0 011-1H19a1 1 0 011 1v2.768z"
    ></path>
    <path
      fill="#71717A"
      d="M14.384 13.384a1 1 0 01-1 1h-2.768a1 1 0 01-1-1v-2.768a1 1 0 011-1h2.768a1 1 0 011 1v2.768zM14.384 19a1 1 0 01-1 1h-2.768a1 1 0 01-1-1v-2.768a1 1 0 011-1h2.768a1 1 0 011 1V19zM20 19a1 1 0 01-1 1h-2.768a1 1 0 01-1-1v-2.768a1 1 0 011-1H19a1 1 0 011 1V19zM8.768 19a1 1 0 01-1 1H5a1 1 0 01-1-1v-2.768a1 1 0 011-1h2.768a1 1 0 011 1V19z"
    ></path>
  </svg>
);

export default PNPM;
