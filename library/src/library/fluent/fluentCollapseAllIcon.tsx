import type { ComponentProps, FC } from "react";
const FluentCollapseAllIcon: FC<ComponentProps<"svg">> = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M13.098 4.176c.525.185.902.685.902 1.274v6A2.55 2.55 0 0 1 11.45 14h-6a1.35 1.35 0 0 1-1.274-.902l1.258.002h6.016a1.65 1.65 0 0 0 1.65-1.65v-6l-.002-.03V4.175zM11.148 2c.746 0 1.35.604 1.35 1.35v7.798a1.35 1.35 0 0 1-1.35 1.35H3.35A1.35 1.35 0 0 1 2 11.148V3.35C2 2.604 2.604 2 3.35 2zm0 .9H3.35a.45.45 0 0 0-.45.45v7.798c0 .249.201.45.45.45h7.798a.45.45 0 0 0 .45-.45V3.35a.45.45 0 0 0-.45-.45" />
    <path d="M4.633 7.926h5.22c.24 0 .434-.224.434-.5s-.194-.5-.434-.5h-5.22c-.24 0-.435.224-.435.5s.195.5.435.5" />
  </svg>
);
export default FluentCollapseAllIcon;
