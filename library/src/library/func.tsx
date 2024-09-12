import type { ComponentProps, FC } from "react";

const Func: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      fill="#2563EB"
      d="m20.217 8.339-7.649 12.18a1.033 1.033 0 0 1-1.749-.005L3.32 8.334A2.158 2.158 0 0 1 3 7.198 2.235 2.235 0 0 1 5.265 5h13.027c1.243 0 2.255.98 2.255 2.194 0 .401-.113.799-.33 1.145ZM5.161 7.93l5.58 8.604V7.064H5.744c-.577 0-.837.382-.583.867Zm7.644 8.604 5.58-8.604c.257-.485-.006-.867-.583-.867h-4.997v9.47Z"
    />
  </svg>
);

export default Func;
