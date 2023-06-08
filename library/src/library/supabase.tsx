import { ComponentProps, FC } from "react"

const Supabase: FC<ComponentProps<"svg">> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25 26" {...props}>
    <defs>
      <linearGradient
        id="linear0"
        x1="53.974"
        x2="94.163"
        y1="54.974"
        y2="71.829"
        gradientTransform="scale(.22936 .22124)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopColor="#249361"></stop>
        <stop offset="1" stopColor="#3ECF8E"></stop>
      </linearGradient>
      <linearGradient
        id="linear1"
        x1="36.156"
        x2="54.484"
        y1="30.578"
        y2="65.081"
        gradientTransform="scale(.22936 .22124)"
        gradientUnits="userSpaceOnUse"
      >
        <stop offset="0" stopOpacity="0.2"></stop>
        <stop offset="1" stopOpacity="0"></stop>
      </linearGradient>
    </defs>
    <g>
      <path
        fill="#249361"
        d="M14.613 24.398c-.656.797-1.988.36-2.004-.656l-.23-14.879H22.75c1.879 0 2.926 2.094 1.758 3.512zm0 0"
      ></path>
      <path
        fill="#249361"
        d="M14.613 24.398c-.656.797-1.988.36-2.004-.656l-.23-14.879H22.75c1.879 0 2.926 2.094 1.758 3.512zm0 0"
      ></path>
      <path
        fill="#3ECF8E"
        d="M10.395.457c.656-.797 1.984-.36 2 .66l.101 14.875H2.254c-1.879 0-2.926-2.09-1.758-3.512zm0 0"
      ></path>
    </g>
  </svg>
)

export default Supabase
