import type { ComponentProps, FC } from "react"

const Vlang: FC<ComponentProps<'svg'>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <mask
      id="mask0_20924_557"
      style={{ maskType: 'luminance' }}
      width="18"
      height="18"
      x="3"
      y="3"
      maskUnits="userSpaceOnUse"
    >
      <path fill="#fff" d="M3 3h18v18H3V3z"></path>
    </mask>
    <g mask="url(#mask0_20924_557)">
      <path
        fill="#1D4ED8"
        d="M14.448 19.344L19.704 4.8c.072-.252-.072-.432-.324-.432l-4.104.396a.916.916 0 00-.648.504L9.804 19.164c-.108.252.036.468.324.468h3.996c.144 0 .252-.108.324-.252v-.036z"
      ></path>
      <g filter="url(#filter0_f_20924_557)">
        <path
          fill="#EBEBEB"
          d="M13.872 19.38l-2.196-6.264L12 12.9l2.232 6.444-.36.036z"
        ></path>
      </g>
      <path
        fill="#2563EB"
        d="M4.62 4.368l4.104.396c.252.036.54.252.648.504l4.932 14.112c.036.144-.036.252-.144.252h-4.032c-.288 0-.54-.216-.648-.468L4.296 4.8c-.072-.252.072-.432.324-.432z"
      ></path>
    </g>
    <defs>
      <filter
        id="filter0_f_20924_557"
        width="28.156"
        height="32.08"
        x="-1.124"
        y="0.1"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feBlend
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        ></feBlend>
        <feGaussianBlur
          result="effect1_foregroundBlur_20924_557"
          stdDeviation="6.4"
        ></feGaussianBlur>
      </filter>
    </defs>
  </svg>
);

export default Vlang;
