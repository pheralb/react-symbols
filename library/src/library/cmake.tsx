import type { ComponentProps, FC } from "react"

const CMake: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#60A5FA"
      d="M11.826 2.05L3.05 19.405l9.57-8.132-.793-9.223z"
    ></path>
    <path fill="#4ADE80" d="M20.405 19.95L8.603 15.19 3 19.95h17.405z"></path>
    <path
      fill="#F87171"
      d="M21 19.802L12.223 2.347l1.29 14.43L21 19.802z"
    ></path>
  </svg>
)

export default CMake
