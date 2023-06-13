import type { ComponentProps, FC } from "react"

const Figma: FC<ComponentProps<"svg">> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        viewBox="0 0 256 256"
        {...props}
    >
        <path d="M190.15 96A44 44 0 00160 20H88a44 44 0 00-30.15 76 43.9 43.9 0 001.23 65.12A48 48 0 10140 196v-28.83A44 44 0 00190.15 96zM180 64a20 20 0 01-20 20h-20V44h20a20 20 0 0120 20zM68 64a20 20 0 0120-20h28v40H88a20 20 0 01-20-20zm20 84a20 20 0 010-40h28v40H88zm28 48a24 24 0 11-24-24h24zm44-48a20 20 0 1120-20 20 20 0 01-20 20z"></path>
    </svg>
)

export default Figma