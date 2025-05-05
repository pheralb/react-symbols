import type { ComponentProps, FC } from "react";

const Tauri: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <mask
      id="mask0_38271_220"
      width="16"
      height="18"
      x="4"
      y="3"
      maskUnits="userSpaceOnUse"
      style={{ maskType: "luminance" }}
    >
      <path fill="#fff" d="M19.945 3H4v18h15.945z"></path>
    </mask>
    <g mask="url(#mask0_38271_220)">
      <path
        fill="#EAB308"
        d="M15.118 9.535a1.709 1.709 0 1 1-3.418 0 1.709 1.709 0 0 1 3.418 0"
      ></path>
      <path
        fill="#0891B2"
        d="M10.534 12.72a1.709 1.709 0 1 0 0 3.418 1.709 1.709 0 0 0 0-3.418"
      ></path>
      <path
        fill="#EAB308"
        d="M16.95 15.012a6.5 6.5 0 0 1-2.252.917c.232-.663.31-1.37.225-2.067a4.583 4.583 0 1 0-5.236-6.999 7.6 7.6 0 0 0-2.5.73 6.525 6.525 0 1 1 9.764 7.42m-9.686-6.23 1.6.194q.054-.464.202-.909a6.5 6.5 0 0 0-1.802.715"
      ></path>
      <path
        fill="#0891B2"
        d="M6.984 8.953a6.5 6.5 0 0 1 2.269-.924 4.6 4.6 0 0 0-.257 2.074 4.583 4.583 0 1 0 5.26 6.991 7.6 7.6 0 0 0 2.5-.723 6.525 6.525 0 1 1-9.772-7.418"
      ></path>
    </g>
  </svg>
);

export default Tauri;
