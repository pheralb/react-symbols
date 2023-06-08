import type { ComponentProps, FC } from "react"

const Reactts: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#2563EB"
      d="M12 13.677a1.677 1.677 0 100-3.354 1.677 1.677 0 000 3.354z"
    ></path>
    <path
      stroke="#2563EB"
      d="M12 15.436c4.97 0 9-1.538 9-3.436s-4.03-3.436-9-3.436S3 10.102 3 12s4.03 3.436 9 3.436z"
    ></path>
    <path
      stroke="#2563EB"
      d="M9.024 13.718c2.485 4.305 5.832 7.025 7.476 6.076 1.644-.949.961-5.208-1.524-9.512C12.491 5.977 9.144 3.257 7.5 4.206c-1.644.949-.961 5.208 1.524 9.512z"
    ></path>
    <path
      stroke="#2563EB"
      d="M9.024 10.282c-2.485 4.304-3.168 8.563-1.524 9.512 1.644.95 4.99-1.771 7.476-6.076 2.485-4.304 3.168-8.563 1.524-9.512-1.644-.95-4.99 1.771-7.476 6.076z"
    ></path>
  </svg>
)

export default Reactts
