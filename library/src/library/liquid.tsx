import type { ComponentProps, FC } from "react"

const Liquid: FC<ComponentProps<"svg">> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            stroke="#60A5FA"
            strokeWidth="2"
            d="M17.74 14.26C17.74 11.088 12 4 12 4s-5.74 7.089-5.74 10.26a5.74 5.74 0 0011.48 0z"
        ></path>
    </svg>
)

export default Liquid