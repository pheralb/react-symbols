import type { ComponentProps, FC } from "react";
const FluentPlayIcon: FC<ComponentProps<"svg">> = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M4.452 3.888a.418.418 0 0 0-.617.367v7.49c0 .317.34.519.617.367l6.884-3.745a.418.418 0 0 0 0-.734zM3 4.255c0-.95 1.017-1.555 1.852-1.1L11.735 6.9a1.253 1.253 0 0 1 0 2.2l-6.883 3.746A1.253 1.253 0 0 1 3 11.746V4.254z" />
  </svg>
);
export default FluentPlayIcon;
