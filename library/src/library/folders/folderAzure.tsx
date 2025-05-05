import type { ComponentProps, FC } from "react";

const FolderAzure: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#clip0_38272_259)">
      <mask
        id="mask0_38272_259"
        width="24"
        height="24"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "luminance" }}
      >
        <path fill="#fff" d="M24 0H0v24h24z"></path>
      </mask>
      <g mask="url(#mask0_38272_259)">
        <path
          fill="#64748B"
          fillRule="evenodd"
          d="M5 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h8v-2H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h2.784a1 1 0 0 1 .635.227l2.393 1.966a3 3 0 0 0 1.904.682H19a1 1 0 0 1 1 1V10h2v-.125a3 3 0 0 0-3-3h-6.284a1 1 0 0 1-.635-.227L9.688 4.682A3 3 0 0 0 7.784 4z"
          clipRule="evenodd"
        ></path>
        <path
          fill="url(#paint0_linear_38272_259)"
          d="M22 11.873v6.08L19.5 20l-3.875-1.41v1.398l-2.194-2.867 6.394.5v-5.475zm-2.131.306L16.28 10v1.43l-3.294.967L12 13.664v2.878l1.413.624v-3.688z"
        ></path>
      </g>
    </g>
    <defs>
      <linearGradient
        id="paint0_linear_38272_259"
        x1="17"
        x2="17"
        y1="19.969"
        y2="10.019"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#0078D4"></stop>
        <stop offset="0.16" stopColor="#1380DA"></stop>
        <stop offset="0.53" stopColor="#3C91E5"></stop>
        <stop offset="0.82" stopColor="#559CEC"></stop>
        <stop offset="1" stopColor="#5EA0EF"></stop>
      </linearGradient>
      <clipPath id="clip0_38272_259">
        <path fill="#fff" d="M0 0h24v24H0z"></path>
      </clipPath>
    </defs>
  </svg>
);

export default FolderAzure;
