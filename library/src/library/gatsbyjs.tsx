import type { ComponentProps, FC } from "react"

const Gatsbyjs: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#A855F7"
      fillRule="evenodd"
      d="M3 12c0-4.95 4.05-9 9-9s9 4.05 9 9-4.05 9-9 9-9-4.05-9-9zm1.878-1.597C5.609 7.142 8.536 4.678 12 4.678c2.463 0 4.593 1.2 5.922 2.995l.138.186-1.343 1.164-.161-.217c-1.05-1.42-2.713-2.342-4.556-2.342-2.346 0-4.396 1.47-5.176 3.543l7.169 7.168c1.61-.608 2.851-1.98 3.34-3.64H14.32V11.75h5V12c0 3.463-2.462 6.387-5.653 7.186l-.138.034-8.682-8.683.03-.134zm-.2 1.058l7.797 7.796h-.604c-1.802 0-3.666-.734-5.062-2.13-1.396-1.396-2.13-3.195-2.13-5.062v-.604z"
      clipRule="evenodd"
    ></path>
  </svg>
)

export default Gatsbyjs
