import type { ComponentProps, FC } from "react";

const Rolldown: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    viewBox="-4 -4 51 53"
    {...props}
  >
    <path
      fill="#F87171"
      d="M39.287 0c.959 0 1.482 1.118.868 1.855L29.712 14.388c-1.228 1.473-.181 3.711 1.738 3.711h10.101c.959 0 1.482 1.118.868 1.855L22.211 44.206a1.132 1.132 0 0 1-1.738 0L.264 19.954c-.614-.737-.09-1.855.869-1.855H11.23c1.918 0 2.967-2.238 1.739-3.711L2.526 1.855C1.912 1.118 2.436 0 3.394 0z"
    ></path>
  </svg>
);

export default Rolldown;
