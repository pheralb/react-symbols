import type { ComponentProps, FC } from "react"

const AngularService: FC<ComponentProps<"svg">> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.0304 5.96958L19.4164 15.6117L13.5456 2.96857L20.0304 5.96958ZM15.9641 18.4374L11.528 20.9686L7.09193 18.4374L7.99417 16.2508H15.0618L15.9641 18.4374ZM11.528 7.76771L13.8525 13.419H9.20348L11.528 7.76771ZM3.63333 15.6117L3.02557 5.96958L9.51045 2.96857L3.63333 15.6117Z"
      fill="#FBBF24"
    />
  </svg>
)

export default AngularService