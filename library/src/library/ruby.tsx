import { ComponentProps, FC } from "react"

const Ruby: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <mask
      id="mask0_20571_807"
      style={{ maskType: "alpha" }}
      width="20"
      height="17"
      x="2"
      y="3"
      maskUnits="userSpaceOnUse"
    >
      <path
        fill="#D9D9D9"
        d="M17.992 3.14H6.78L2.84 9.377l9.578 9.877 9.02-9.877-3.445-6.237z"
      ></path>
    </mask>
    <g
      stroke="#F87171"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      mask="url(#mask0_20571_807)"
    >
      <path d="M12.653 2.162L8.336 9.35l4.323 11.255"></path>
      <path d="M11.441 2.17l4.33 7.193-4.312 11.265"></path>
    </g>
    <path
      stroke="#F87171"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4.107 9.35h16.125"
    ></path>
    <path
      fill="#F87171"
      fillRule="evenodd"
      d="M6.48 3.584a1 1 0 01.837-.453H17.32a1 1 0 01.87.505l2.976 5.231a1 1 0 01-.082 1.112l-7.857 10.024a1 1 0 01-1.549.031L3.142 10.01a1 1 0 01-.076-1.195l3.414-5.23zm1.379 1.547l-2.71 4.152 7.258 8.523 6.688-8.533-2.357-4.142h-8.88z"
      clipRule="evenodd"
    ></path>
  </svg>
)

export default Ruby
