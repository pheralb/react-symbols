import type { ComponentProps, FC } from "react"

const Angular: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#F87171"
      fillRule="evenodd"
      d="M12.379 3L4 5.988l1.278 11.079L12.379 21l7.101-3.933 1.278-11.079L12.379 3zM7.141 16.734l5.238-11.745 5.22 11.745h-1.953l-1.053-2.628h-4.446l-1.053 2.628H7.141zm5.238-7.929l-1.53 3.681h3.06l-1.53-3.681z"
      clipRule="evenodd"
    ></path>
  </svg>
)

export default Angular
