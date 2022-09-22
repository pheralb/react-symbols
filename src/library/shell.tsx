import { ComponentProps, FC } from 'react';

const Shell: FC<ComponentProps<'svg'>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path
      stroke="#14B8A6"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4.336 17l6-6-6-6M12.336 19h8"
    ></path>
  </svg>
);

export default Shell;
