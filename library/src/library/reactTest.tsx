import type { ComponentProps, FC } from "react"

const ReactTest: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#EA580C"
      d="M11.5 13.677c.888 0 1.607-.75 1.607-1.677 0-.926-.72-1.677-1.607-1.677-.888 0-1.607.75-1.607 1.677 0 .926.72 1.677 1.607 1.677z"
    ></path>
    <path
      stroke="#EA580C"
      d="M11.5 15.436c4.764 0 8.625-1.538 8.625-3.436S16.264 8.564 11.5 8.564c-4.763 0-8.625 1.538-8.625 3.436s3.862 3.436 8.625 3.436z"
    ></path>
    <path
      stroke="#EA580C"
      d="M8.648 13.718c2.382 4.305 5.59 7.025 7.165 6.076 1.575-.949.92-5.208-1.461-9.512-2.382-4.305-5.59-7.025-7.164-6.076-1.576.949-.922 5.208 1.46 9.512z"
    ></path>
    <path
      stroke="#EA580C"
      d="M8.648 10.282c-2.382 4.304-3.036 8.563-1.46 9.512 1.575.95 4.782-1.771 7.164-6.076 2.382-4.304 3.036-8.563 1.46-9.512-1.575-.95-4.782 1.771-7.164 6.076z"
    ></path>
  </svg>
)

export default ReactTest
