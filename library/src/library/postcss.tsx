import type { ComponentProps, FC } from "react";

const PostCSS: FC<ComponentProps<"svg">> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#F87171"
      strokeLinecap="round"
      strokeWidth="2"
      d="M20.799 12a8.798 8.798 0 11-17.597 0 8.798 8.798 0 0117.597 0"
    ></path>
    <path
      stroke="#F87171"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M19.772 15.898H4.228L12 4.68l7.772 11.22z"
    ></path>
    <path
      stroke="#F87171"
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M8.885 9.174h6.23v6.23h-6.23v-6.23z"
    ></path>
  </svg>
);

export default PostCSS;
