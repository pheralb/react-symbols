import type { ComponentProps, FC } from "react";

const Luau: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#0EA5E9"
      fillRule="evenodd"
      d="M6.916 3.38c-1.343 4-4 13.042-3.868 13.162.277.251 12.893 4.185 13.493 4.207.505.02.616-.259 2.538-6.372 1.106-3.516 1.99-6.531 1.964-6.7-.03-.206-2.342-1.024-6.872-2.435-3.754-1.17-6.902-2.128-6.995-2.13-.093-.001-.21.12-.26.268zm9.878 5.358c-.152.594-.265 1.154-.251 1.246.023.157 2.206.986 2.292.871.23-.306.716-2.231.592-2.342-.123-.109-2.153-.853-2.328-.853-.016 0-.153.485-.305 1.078z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default Luau;