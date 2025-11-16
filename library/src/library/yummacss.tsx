import type { ComponentProps, FC } from "react";

const YummaCSS: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx="12" cy="12" r="10.5" fill="#fff"></circle>
    <path
      fill="#413cb8"
      d="M3 12c0-4.99 4.01-9 9-9s9 4.01 9 9-4.01 9-9 9-9-4.01-9-9m9-7.364A7.333 7.333 0 0 0 4.636 12 7.333 7.333 0 0 0 12 19.364 7.333 7.333 0 0 0 19.364 12 7.333 7.333 0 0 0 12 4.636m3.436 3.273c-.327 0-.654.164-.9.41l-6.3 6.3a1.25 1.25 0 0 0-.327.817c0 .328.164.737.491.982a5.72 5.72 0 0 0 3.6 1.31c1.555 0 2.945-.574 4.01-1.719 1.063-1.064 1.717-2.536 1.717-4.009 0-1.31-.49-2.618-1.309-3.6a1.17 1.17 0 0 0-.982-.49"
    ></path>
  </svg>
);

export default YummaCSS;
