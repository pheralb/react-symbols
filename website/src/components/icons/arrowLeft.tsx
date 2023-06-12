import type { ComponentProps, FC } from "react"

const ArrowLeft: FC<ComponentProps<"svg">> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" {...props}>
        <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="10"
            strokeWidth="1.5"
            d="M10 16l-4-4m0 0l4-4m-4 4h12"
        ></path>
    </svg>
)

export default ArrowLeft