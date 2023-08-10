import type { ComponentProps, FC } from "react"

const VisualStudio: FC<ComponentProps<"svg">> = (props) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        {...props}
    >
        <path
            fill="#7E22CE"
            d="M6.3 18.225l-3-2.25a.743.743 0 01-.3-.6v-6.75a.743.743 0 01.3-.6l3-2.25a.68.68 0 00-.206.6v11.25a.68.68 0 00.206.6z"
        ></path>
        <path
            fill="#9333EA"
            d="M20.666 6.124a.754.754 0 00-.934.086l-.052.052-3.188 3.057L13.695 12l-3.311 3.176-3.064 2.936-.053.053a.728.728 0 01-.517.21.754.754 0 01-.45-.15l-3-2.25a.75.75 0 001.02-.113L6 13.912l1.65-1.916 2.734-3.172 4.788-5.562A.74.74 0 0115.74 3c.147 0 .292.043.416.124l4.511 3z"
        ></path>
        <path
            fill="#A855F7"
            d="M20.666 17.876l-4.5 3a.759.759 0 01-.986-.135l-4.796-5.565-2.734-3.18L6 10.084l-1.68-1.95a.754.754 0 00-1.02-.109l3-2.25a.754.754 0 01.73-.097c.088.036.17.09.237.157l.053.053 3.064 2.936L13.695 12l2.801 2.685 3.184 3.053.052.052a.729.729 0 00.518.21.753.753 0 00.416-.124z"
        ></path>
        <path
            fill="#C084FC"
            d="M21 6.75v10.5a.752.752 0 01-.334.626l-4.5 3a.752.752 0 00.334-.626V3.75a.759.759 0 00-.345-.626l4.511 3A.757.757 0 0121 6.75z"
        ></path>
        <path
            fill="#7E22CE"
            d="M21 6.75v10.5a.752.752 0 01-.334.626l-4.5 3a.752.752 0 00.334-.626V3.75a.759.759 0 00-.345-.626l4.511 3A.757.757 0 0121 6.75z"
            opacity="0.4"
        ></path>
    </svg>
)

export default VisualStudio