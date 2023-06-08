import type { ComponentProps, FC } from "react"

const Ionic: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#2563EB"
      fillRule="evenodd"
      d="M12 4.4a7.6 7.6 0 107.573 6.951 7.55 7.55 0 00-.28-1.498l.02-.001a2.857 2.857 0 002.128-1.155A9.927 9.927 0 0122 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2a9.96 9.96 0 015.95 1.962 2.188 2.188 0 11.613 4.288 2.188 2.188 0 01-2.172-2.454A7.562 7.562 0 0012 4.4zm0 11.975A4.38 4.38 0 0016.375 12 4.38 4.38 0 0012 7.625 4.38 4.38 0 007.625 12 4.382 4.382 0 0012 16.375z"
      clipRule="evenodd"
    ></path>
  </svg>
)

export default Ionic
