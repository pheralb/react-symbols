import type { ComponentProps, FC } from "react";

const WebGPU: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g strokeLinejoin="round" strokeWidth="2">
      <g stroke="#0EA5E9">
        <path d="m19.36 6-1.637 2.834H21zM19.36 11.667l-1.637-2.833H21zM16.088 17.334l-3.272-5.667h6.544z"></path>
      </g>
      <g stroke="#2563EB">
        <path d="m16.088 6-3.272 5.667h6.544zM9.544 17.334 3 6h13.087z"></path>
      </g>
    </g>
  </svg>
);

export default WebGPU;
