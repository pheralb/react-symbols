import { ComponentProps, FC } from 'react';

const Robot: FC<ComponentProps<'svg'>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#64748B"
      fillRule="evenodd"
      d="M12.333 3a1 1 0 00-1 1v2c0 .076.009.15.025.222H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2v-10a2 2 0 00-2-2h-5.691A.998.998 0 0013.332 6V4a1 1 0 00-1-1zM11 11.111a3 3 0 11-6 0 3 3 0 016 0zm5 3a3 3 0 100-6 3 3 0 000 6zm-8 3.111a1 1 0 011-1h7a1 1 0 110 2H9a1 1 0 01-1-1zm0-5.11a1 1 0 100-2 1 1 0 000 2zm9-1a1 1 0 11-2 0 1 1 0 012 0z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default Robot;
