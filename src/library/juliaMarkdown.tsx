import { ComponentProps, FC } from 'react';

const JuliaMarkdown: FC<ComponentProps<'svg'>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#60A5FA"
      d="M11.354 16.177a4.177 4.177 0 11-8.354 0 4.177 4.177 0 018.354 0zM16.177 7.823a4.177 4.177 0 11-8.354 0 4.177 4.177 0 018.354 0z"
    ></path>
    <path
      fill="#60A5FA"
      d="M21 16.177a4.177 4.177 0 11-8.354 0 4.177 4.177 0 018.354 0z"
    ></path>
  </svg>
);

export default JuliaMarkdown;
