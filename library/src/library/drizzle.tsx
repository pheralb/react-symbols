import type { ComponentProps, FC } from "react"

const Drizzle: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#4ADE80"
      d="M7.015 11.416a.777.777 0 00-.296-1.067.798.798 0 00-1.078.3l-2.537 4.426a.777.777 0 00.296 1.067.798.798 0 001.078-.3l2.537-4.426zM12.483 8.022a.777.777 0 00-.296-1.067.797.797 0 00-1.078.3L8.572 11.68a.777.777 0 00.296 1.067.797.797 0 001.078-.3l2.537-4.426zM20.896 8.022a.777.777 0 00-.295-1.067.798.798 0 00-1.079.3l-2.537 4.426a.777.777 0 00.296 1.067.797.797 0 001.079-.3l2.536-4.426zM15.427 11.416a.777.777 0 00-.296-1.067.798.798 0 00-1.078.3l-2.537 4.426a.777.777 0 00.296 1.067.798.798 0 001.078-.3l2.537-4.426z"
    ></path>
  </svg>
)

export default Drizzle
