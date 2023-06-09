import type { ComponentProps, FC } from "react"

const Terraform: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#A855F7"
      d="M15.134 14.994L20.6 11.84V5.523l-5.466 3.16M9.067 5.523l5.467 3.16v6.31l-5.467-3.156M3 8.313l5.467 3.157V5.157L3 2m6.067 16.843L14.534 22v-6.313L9.067 12.53"
    ></path>
  </svg>
)

export default Terraform
