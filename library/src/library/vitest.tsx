import type { ComponentProps, FC } from "react"

const Vitest: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 25 24"
    {...props}
  >
    <path
      fill="#FBBF24"
      d="M17.509 8.055l-4.781 7.068a.412.412 0 01-.47.16.41.41 0 01-.208-.161.423.423 0 01-.07-.256l.19-3.902-3.089-.67a.407.407 0 01-.295-.254.425.425 0 01.043-.391l4.782-7.068a.412.412 0 01.47-.16.422.422 0 01.278.416l-.191 3.903 3.089.67a.408.408 0 01.295.254.422.422 0 01-.043.391z"
    ></path>
    <path
      fill="#14B8A6"
      d="M12.498 21.6a.957.957 0 00.685-.286L17.7 16.76a.98.98 0 00-.685-1.664.965.965 0 00-.684.284l-3.833 3.864-8.35-8.419a.964.964 0 00-1.364.006.98.98 0 00-.006 1.375l9.036 9.108a.965.965 0 00.684.286z"
    ></path>
    <path
      fill="#14B8A6"
      d="M12.502 21.6a.957.957 0 01-.685-.286L7.3 16.76a.98.98 0 01.002-1.378.964.964 0 011.368-.002l3.833 3.864 8.35-8.419a.964.964 0 011.364.006.98.98 0 01.006 1.375l-9.036 9.108a.964.964 0 01-.684.286z"
    ></path>
  </svg>
)

export default Vitest