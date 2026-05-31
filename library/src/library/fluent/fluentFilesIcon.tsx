import type { ComponentProps, FC } from "react";
const FluentFilesIcon: FC<ComponentProps<"svg">> = (props) => (
  <svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    {...props}
  >
    <path d="M3.202 2.101 3.2 3.8v8.402a2.6 2.6 0 0 0 2.6 2.6h6.89A1.8 1.8 0 0 1 10.995 16H5.799A3.8 3.8 0 0 1 2 12.2V3.8a1.8 1.8 0 0 1 1.202-1.7zM9.302 0a1.8 1.8 0 0 1 1.272.527l3.694 3.697a1.8 1.8 0 0 1 .527 1.272V12.2a1.8 1.8 0 0 1-1.8 1.8H5.801a1.8 1.8 0 0 1-1.8-1.8V1.8a1.8 1.8 0 0 1 1.8-1.8zm-.104 1.2H5.801a.6.6 0 0 0-.6.6v10.4a.6.6 0 0 0 .6.6h7.194a.6.6 0 0 0 .6-.6V5.602h-2.597a1.8 1.8 0 0 1-1.795-1.675l-.005-.124zm1.2.848v1.754a.6.6 0 0 0 .519.595l.081.005h1.752z" />
  </svg>
);
export default FluentFilesIcon;
