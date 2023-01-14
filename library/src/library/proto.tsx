import { ComponentProps, FC } from 'react';

const Proto: FC<ComponentProps<'svg'>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#F87171"
      fillRule="evenodd"
      d="M10.405 7.748a1.5 1.5 0 01-.549 2.05l-6.062 3.5a1.5 1.5 0 01-1.5-2.599l6.062-3.5a1.5 1.5 0 012.049.55z"
      clipRule="evenodd"
    ></path>
    <path
      fill="#2563EB"
      fillRule="evenodd"
      d="M1.745 11.252a1.5 1.5 0 012.049-.55l6.062 3.5a1.5 1.5 0 01-1.5 2.599l-6.062-3.5a1.5 1.5 0 01-.55-2.05z"
      clipRule="evenodd"
    ></path>
    <path
      fill="#F59E0B"
      fillRule="evenodd"
      d="M22.255 11.252a1.5 1.5 0 00-2.049-.55l-6.062 3.5a1.5 1.5 0 001.5 2.599l6.062-3.5a1.5 1.5 0 00.55-2.05z"
      clipRule="evenodd"
    ></path>
    <path
      fill="#2DD4BF"
      fillRule="evenodd"
      d="M13.595 7.748a1.5 1.5 0 00.549 2.05l6.062 3.5a1.5 1.5 0 001.5-2.599l-6.062-3.5a1.5 1.5 0 00-2.049.55z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default Proto;
