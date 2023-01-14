import { ComponentProps, FC } from 'react';

const DrawIO: FC<ComponentProps<'svg'>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect width="8" height="6" x="8" y="3.5" fill="#F59E0B" rx="1"></rect>
    <rect width="8" height="6" x="3" y="14.5" fill="#F59E0B" rx="1"></rect>
    <rect width="8" height="6" x="13" y="14.5" fill="#F59E0B" rx="1"></rect>
    <path
      stroke="#F59E0B"
      strokeWidth="1.5"
      d="M6.608 17.024L12.265 7.226"
    ></path>
    <path
      stroke="#F59E0B"
      strokeWidth="1.5"
      d="M0 -0.75L11.314 -0.75"
      transform="scale(-1 1) rotate(-60 6.697 23.199)"
    ></path>
  </svg>
);

export default DrawIO;
