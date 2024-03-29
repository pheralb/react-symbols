import type { ComponentProps, FC } from "react"

const H: FC<ComponentProps<"svg">> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            fill="#60A5FA"
            d="M10.178 12.87v5.676H7.455V5.455h2.646v5.005h.116a2.78 2.78 0 011.073-1.362c.495-.332 1.115-.499 1.86-.499.682 0 1.277.15 1.784.448.511.294.908.718 1.189 1.272.285.55.426 1.208.422 1.975v6.252h-2.723V12.78c.004-.605-.15-1.076-.46-1.413-.307-.337-.738-.505-1.292-.505-.37 0-.699.079-.984.237a1.676 1.676 0 00-.665.69c-.158.298-.239.658-.243 1.08z"
        ></path>
    </svg>
)

export default H