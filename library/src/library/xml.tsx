import type { ComponentProps, FC } from "react"

const XML: FC<ComponentProps<'svg'>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <circle cx="5" cy="19" r="2" fill="#EA580C"></circle>
    <mask
      id="mask0_20543_563"
      style={{ maskType: 'alpha' }}
      width="20"
      height="22"
      x="4"
      y="0"
      maskUnits="userSpaceOnUse"
    >
      <path fill="#D9D9D9" d="M4 0H24V22H4z"></path>
    </mask>
    <g mask="url(#mask0_20543_563)">
      <circle cx="5" cy="19" r="8" stroke="#EA580C" strokeWidth="2"></circle>
    </g>
    <mask
      id="mask1_20543_563"
      style={{ maskType: 'alpha' }}
      width="19"
      height="20"
      x="5"
      y="0"
      maskUnits="userSpaceOnUse"
    >
      <path fill="#D9D9D9" d="M5 0H24V20H5z"></path>
    </mask>
    <g mask="url(#mask1_20543_563)">
      <circle cx="5" cy="19" r="15" stroke="#EA580C" strokeWidth="2"></circle>
    </g>
  </svg>
);

export default XML;
