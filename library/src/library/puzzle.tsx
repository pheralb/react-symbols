import type { ComponentProps, FC } from "react"

const Puzzle: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#60A5FA"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M13.425 2.5a2.346 2.346 0 012.346 2.346v.504h3.354a.95.95 0 01.95.95v3.324l-1.454.001a2.346 2.346 0 00-2.341 2.192l-.005.154v.058c0 1.244.968 2.261 2.192 2.341l.154.005 1.453-.001.001 3.329a.95.95 0 01-.95.95l-3.354-.001v.502a2.346 2.346 0 11-4.692 0v-.502H7.724a.95.95 0 01-.95-.95l-.001-3.355h-.503a2.346 2.346 0 010-4.692h.503L6.775 6.3a.95.95 0 01.95-.95h3.354v-.504A2.346 2.346 0 0113.425 2.5z"
    ></path>
  </svg>
)

export default Puzzle
