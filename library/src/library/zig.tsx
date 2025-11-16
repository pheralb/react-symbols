import type { ComponentProps, FC } from "react";

const Zig: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#FBBF24"
      fillRule="evenodd"
      d="M11.306 14.857L20.4 4l-5.6 2.514H9.657L7.486 9.03h5.226L3.6 20l5.6-2.629h5.143l2.171-2.514h-5.208z"
      clipRule="evenodd"
    ></path>
  </svg>
);

export default Zig;
