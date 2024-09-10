import type { ComponentProps, FC } from "react";

const MCAddon: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      fill="#22C55E"
      d="M5.6 4h12.8A1.6 1.6 0 0 1 20 5.6v12.8a1.6 1.6 0 0 1-1.6 1.6H5.6A1.6 1.6 0 0 1 4 18.4V5.6A1.6 1.6 0 0 1 5.6 4Zm1.6 3.2v3.2h3.2V12H8.8v4.8h1.6v-1.6h3.2v1.6h1.6V12h-1.6v-1.6h3.2V7.2h-3.2v3.2h-3.2V7.2H7.2Z"
    />
  </svg>
);

export default MCAddon;
