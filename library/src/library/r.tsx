import type { ComponentProps, FC } from "react"

const R: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#71717A"
      fillRule="evenodd"
      d="M19.856 14.03c.728-.87 1.144-1.874 1.144-2.943 0-3.329-4.03-6.027-9-6.027s-9 2.698-9 6.027c0 2.732 2.713 5.04 6.434 5.78v-1.963c-1.753-.746-2.897-1.976-2.897-3.367 0-2.276 3.063-4.12 6.84-4.12 3.779 0 6.567 1.262 6.567 4.12 0 .297-.03.576-.088.839v1.655z"
      clipRule="evenodd"
    ></path>
    <path
      fill="#2563EB"
      fillRule="evenodd"
      d="M16.706 14.396s.545.164.862.324c.11.056.3.167.436.312.135.143.2.287.2.287l2.147 3.62-3.47.001-1.622-3.047s-.332-.57-.537-.736c-.17-.138-.243-.187-.412-.187h-.824v3.968l-3.07.001V8.803h6.166s2.808.05 2.808 2.722-2.684 2.87-2.684 2.87zM15.371 11h-1.859v1.723h1.859s.861-.004.861-.878c0-.891-.861-.845-.861-.845z"
      clipRule="evenodd"
    ></path>
  </svg>
)

export default R
