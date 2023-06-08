import { ComponentProps, FC } from "react"

const Audio: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <rect width="2" height="8" x="3" y="8" fill="#64748B" rx="1"></rect>
    <rect width="2" height="12" x="7" y="6" fill="#64748B" rx="1"></rect>
    <rect width="2" height="18" x="11" y="3" fill="#64748B" rx="1"></rect>
    <rect width="2" height="12" x="15" y="6" fill="#64748B" rx="1"></rect>
    <rect width="2" height="8" x="19" y="8" fill="#64748B" rx="1"></rect>
  </svg>
)

export default Audio
