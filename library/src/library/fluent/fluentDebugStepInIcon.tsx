import type { ComponentProps, FC } from "react";
const FluentDebugStepInIcon: FC<ComponentProps<"svg">> = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M8 15a1.833 1.833 0 1 1 0-3.667A1.833 1.833 0 0 1 8 15m0-1a.833.833 0 1 0 0-1.667A.833.833 0 0 0 8 14M7.922.337 8 .332c.342 0 .624.258.662.59l.005.077v6.393l2.196-2.195a.67.67 0 0 1 .88-.055l.063.055c.24.24.258.619.055.88l-.056.063-3.331 3.331a.67.67 0 0 1-.88.056l-.063-.056-3.335-3.33a.667.667 0 0 1 .879-1l.063.056 2.195 2.192V.999c0-.342.258-.624.59-.662z" />
  </svg>
);
export default FluentDebugStepInIcon;
