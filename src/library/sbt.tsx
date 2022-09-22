import { ComponentProps, FC } from 'react';

const Sbt: FC<ComponentProps<'svg'>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#2563EB"
      fillRule="evenodd"
      d="M20.488 15c.225-.637.38-1.306.457-2H11a1 1 0 110-2h9.945a8.948 8.948 0 00-.457-2H13a1 1 0 110-2h6.485a9 9 0 100 10H9a1 1 0 110-2h11.488z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default Sbt;
