import { ComponentProps, FC } from 'react';

const FSharp: FC<ComponentProps<'svg'>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g fill="#14B8A6" clipPath="url(#clip0_20564_628)">
      <path d="M5.832 17.5V5.864h7.704v2.028H8.292v2.773h4.733v2.028H8.292V17.5h-2.46zM20.273 16.47l1.466-8.94h1.397l-1.467 8.94h-1.396zm-4.003-2.218l.232-1.397h6.983l-.231 1.397H16.27zm.86 2.217l1.467-8.938h1.396l-1.466 8.938H17.13zm-.349-5.325l.236-1.396H24l-.236 1.397h-6.983z"></path>
    </g>
    <defs>
      <clipPath id="clip0_20564_628">
        <path fill="#fff" d="M0 0H24V24H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default FSharp;
