import type { ComponentProps, FC } from "react"

const Eslint: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#A5B4FC"
      d="M15.952 9.394l-3.798-2.193a.307.307 0 00-.308 0L8.048 9.394a.308.308 0 00-.154.266v4.386c0 .11.059.212.154.267l3.798 2.193a.308.308 0 00.308 0l3.798-2.193a.307.307 0 00.154-.267V9.66a.307.307 0 00-.154-.266z"
    ></path>
    <path
      fill="#4F46E5"
      d="M2.123 11.392l4.54-7.896C6.826 3.211 7.131 3 7.46 3h9.078c.33 0 .634.21.799.496l4.538 7.879a.94.94 0 010 .931l-4.538 7.831c-.165.286-.47.432-.8.432H7.462c-.33 0-.634-.142-.799-.427l-4.538-7.845a.89.89 0 010-.905zm3.759 3.797c0 .116.07.223.17.281l5.782 3.336c.1.058.226.058.327 0l5.785-3.336c.1-.058.171-.165.171-.281V8.518a.333.333 0 00-.17-.282l-5.781-3.335a.329.329 0 00-.327 0L6.053 8.236a.334.334 0 00-.172.282v6.671z"
    ></path>
  </svg>
)

export default Eslint
