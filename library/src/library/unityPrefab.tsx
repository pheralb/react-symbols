import type { ComponentProps, FC } from "react";

const UnityPrefab: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="svg1"
    fill="none"
    version="1.1"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      id="path8"
      fill="#0ea5e9"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="0.9"
      d="M12 2c-.481 0-.964.125-1.395.373h-.001l-.004.002-6.287 3.598-.006.002A2.8 2.8 0 0 0 2.91 8.396v7.206a2.8 2.8 0 0 0 1.397 2.421l.005.002 6.288 3.598a2.8 2.8 0 0 0 1.398.375h.004c.48 0 .962-.125 1.393-.373l6.293-3.6.005-.002a2.8 2.8 0 0 0 1.397-2.421V8.396a2.8 2.8 0 0 0-1.397-2.421l-.006-.002-6.292-3.6A2.8 2.8 0 0 0 12 2M4.908 9.072 11 12.576v6.97L5.309 16.29a.8.8 0 0 1-.4-.69z"
      baselineShift="baseline"
      display="inline"
      overflow="visible"
      stopColor="#000"
      vectorEffect="none"
    ></path>
  </svg>
);

export default UnityPrefab;
