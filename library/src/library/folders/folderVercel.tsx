import type { ComponentProps, FC } from "react"

const FolderVercel: FC<ComponentProps<"svg">> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M5 4C3.34315 4 2 5.34315 2 7V17C2 18.6569 3.34315 20 5 20H13V18H5C4.44772 18 4 17.5523 4 17V7C4 6.44772 4.44772 6 5 6H7.78388C8.01539 6 8.23973 6.08033 8.41862 6.22727L10.8119 8.19318C11.3486 8.63402 12.0216 8.875 12.7161 8.875H19C19.5523 8.875 20 9.32272 20 9.875V10H22V9.875C22 8.21815 20.6569 6.875 19 6.875H12.7161C12.4846 6.875 12.2603 6.79467 12.0814 6.64773L9.6881 4.68182C9.15142 4.24098 8.47841 4 7.78388 4H5Z"
      fill="#64748B"
    />
    <path d="M19.5 11.5L24 19.5H15L19.5 11.5Z" fill="#64748B" />
  </svg>
)

export default FolderVercel